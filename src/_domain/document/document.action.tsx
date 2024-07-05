import { put, select, takeEvery } from 'redux-saga/effects'
import { loadingShow, loadingHide } from '../animation/animation'
import { PayloadAction } from '@reduxjs/toolkit'

// import helper
import { CalcCosine, textToEmbed, trunkEmbedding } from './helper/embed.helper'
import { loadHTMLContent } from './helper/html.helper'
import {
    ParseHelper,
    TagArrayType
} from './helper/parse.helper'

// reducer
import {
    DocumentEmbedListInterface,
    DocumentEmbedListPropsInterface,
} from './reducers/DocumentEmbedList'
import {
    downloadEmbedList,
    downloadTextList,
    loadEmbedList, loadTextList,
    saveEmbedList, saveTextList,
    loadDragFile
} from './helper/file.helper'
import {
    DocumentTextListInterface,
    DocumentTextListPropsInterface
} from './reducers/DocumentTextList'
import { DocumentEmbedOptionType } from './reducers/__type.document'

const documentTextList = (state: DocumentTextListPropsInterface) => state.DocumentTextList
const documentEmbedList = (state: DocumentEmbedListPropsInterface) => state.DocumentEmbedList

// Root Saga登録配列
export const RootDocumentAction = [
    takeEvery('DocumentAction/load_url', loadURL),
    takeEvery('DocumentAction/remove', remove),
    takeEvery('DocumentAction/save', save),
    takeEvery('DocumentAction/load', load),
    takeEvery('DocumentAction/doEmbed', doEmbed),
    takeEvery('DocumentAction/resetEmbed', resetEmbed),
    takeEvery('DocumentAction/setEmbed', setEmbed),
    takeEvery('DocumentAction/consistency', consistency),
    takeEvery('DocumentAction/exportDocument', exportDocument),
    takeEvery('DocumentAction/importDocument', importDocument),
]

/**
 * URLからHTMLを取得し、Storeに保存
 * @param val 
 */
function* loadURL(
    val: PayloadAction<{
        source_list: {
            title: string,
            text: string,
            url: string,
            index: number
        }[]
    }>
) {
    yield loadingShow('loading html data...')

    const dt = yield select(documentTextList)

    for (const source of val.payload.source_list) {
        if (dt.texts.filter((v) => v.url === source.url).length > 0) continue

        const html: TagArrayType[][] = yield loadHTMLContent(source)

        yield put({
            type: 'DocumentTextList/add', 
            payload: {
                ...yield ParseHelper.call()
                            .parseTag(html[0])
                            .mergeOption(source)
            }
        })
    }
    yield loadingHide()
}

function* remove(
    val: PayloadAction<{
        index: number
    }>
) {
    yield loadingShow('remove document...')

    yield put({
        type: 'DocumentList/remove',
        payload: {
            index: val.payload.index
        }
    })

    yield loadingHide()
}


function* save() {
    yield loadingShow('save document...')
    const de = yield select(documentTextList)
    const dt = yield select(documentEmbedList)
    console.log(dt)
    yield saveTextList(de.texts)
    yield saveEmbedList(dt.embeds)

    yield loadingHide()
}


function* load() {
    yield loadingShow('loading document...')

    const dt = yield loadTextList()
    const de = yield loadEmbedList()

    yield put({
        type: 'DocumentTextList/set',
        payload: {
            texts: dt
        }
    })

    yield put({
        type: 'DocumentEmbedList/set',
        payload: {
            embeds: de
        }
    })

    yield loadingHide()
}

/**
 * テキストをEmbedに変換する
 */
function* doEmbed() {
    yield loadingShow('do Text to Embed')

    const t: DocumentTextListInterface = yield select(documentTextList)
    const e: DocumentEmbedListInterface = yield select(documentEmbedList)
    const embeds: DocumentEmbedOptionType[] = []

    for (let i = 0; i <= t.texts.length - 1; i++) {

        yield loadingShow( (i + 1) + '/' + t.texts.length + ' Text to Embed...')
        let embed: number[][][] = []

        // 未変換のテキストのみEmbedに変換
        if (
            'embedding' in t.texts[i]
            && t.texts[i].embedding === false
        )
            embed = yield textToEmbed(t.texts[i].chunk)
        else {
            embeds.push(e.embeds[i])
            continue
        }

        if (embed.length > 0) {
            yield put({
                type: 'DocumentTextList/update',
                payload: {
                    ...t.texts[i],
                    url: t.texts[i].url,
                    index: i,
                    embedding: true
                }
            })
            embeds.push({
                key: t.texts[i].key,
                document: t.texts[i].document,
                embedding: embed,
                embedding_n: trunkEmbedding(embed),
            })
        }
    }
    yield put({
        type: 'DocumentEmbedList/set',
        payload: {embeds}
    })

    yield loadingHide()
}

function* resetEmbed() {
    yield loadingShow('reset Embedding...')

    const t: DocumentTextListInterface = yield select(documentTextList)

    for (let i = 0; i <= t.texts.length - 1; i++) {
        if (
            'embedding' in t.texts[i]
            && t.texts[i].embedding === true
        ) {
            yield put({
                type: 'DocumentTextList/update',
                payload: {
                    ...t.texts[i],
                    url: t.texts[i].url,
                    index: i,
                    embedding: false
                }
            })
        }
    }

    yield put({
        type: 'DocumentEmbedList/reset'
    })

    yield loadingHide()
}

function* setEmbed(val: PayloadAction<{
    key: string,
    index: number
}>) {
    const el = yield select(documentEmbedList)
    const e = el.embeds.filter((v) => {
        return v.key === val.payload.key
    })

    yield put({
        type: 'DocumentEmbedView/set',
        payload: {
            document: e[0].document[val.payload.index],
            embedding: e[0].embedding[val.payload.index],
            embedding_n: e[0].embedding_n[val.payload.index]
        }
    })
}


function* consistency(
    val: PayloadAction<{
        embed: number[],
        embed_n: number[]
    }>
) {
    yield loadingShow('consistency...')

    // Local 保存されたデータをStoreに読み込む
    // yield load()
    // Storeからデータを取得
    const e = yield select(documentEmbedList)
    const t = yield select(documentTextList)
    const t_cunk = t.texts.map((_t) => _t.chunk)
    const t_title = t.texts.map((_t) => _t.title)
    const t_url = t.texts.map((_t) => _t.url)
    const e_document = e.embeds.map((v) => v.document)
/*    
    // コサイン類似度を計算
    const er = CalcCosine(
        e.embeds,
        val.payload.embed
    )
    
    const texts1 = ParseHelper.call().scoreToDocument(
        er,
        e_document,
        t_cunk,
        t_title,
        t_url
    )
*/    

    // 丸め込み後のコサイン類似度を計算
    const er_n = CalcCosine(
        e.embeds,
        val.payload.embed_n,
        true
    )

    const texts2 = ParseHelper.call().scoreToDocument(
        er_n,
        e_document,
        t_cunk,
        t_title,
        t_url
    )

    yield loadingHide()

    yield put({
        type: 'SearchAction/result',
        payload: {
            results: texts2
        }
    })
}

function* exportDocument() {
    yield loadingShow('export all documents...')

    const t: DocumentTextListInterface = yield select(documentTextList)
    yield downloadTextList(t.texts)

    const e: DocumentEmbedListInterface = yield select(documentEmbedList)
    yield downloadEmbedList(e.embeds)

    yield loadingHide()
}

function* importDocument(val: PayloadAction<React.DragEvent>) {
    yield loadingShow('import source...')
    // console.log(val.payload)
    const documents = yield loadDragFile(val.payload)
    console.log(documents)

    if ('title' in documents[0]) {
        yield put({
            type: 'DocumentTextList/set',
            payload: {
                texts: documents,
                page: 0,
                max_list: 10
            }
        })
    } else {
        yield put({
            type: 'DocumentEmbedList/set',
            payload: {
                embeds: documents,
                page: 0,
                max_list: 10
            }
        })
    }

    yield loadingHide()
}
