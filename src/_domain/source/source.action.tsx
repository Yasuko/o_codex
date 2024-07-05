import { put, select, takeEvery } from 'redux-saga/effects'
import { loadingShow, loadingHide, showToast } from '../animation/animation'

// import helper
import {
    saveSourceList, loadSouceList,
    downloadSourceList, loadDragFile
} from './helper/file.helper'

// reducer
import {
    SourceFormPropsInterface,
} from './reducers/SourceForm'
import {
    SourceListPropsInterface,
} from './reducers/SourceList'
import { PayloadAction } from '@reduxjs/toolkit'

const sourceForm = (state: SourceFormPropsInterface) => state.SourceForm
const sourceList = (state: SourceListPropsInterface) => state.SourceList

// Root Saga登録配列
export const RootSourceAction = [
    takeEvery('SourceAction/add', add),
    takeEvery('SourceAction/update', update),
    takeEvery('SourceAction/remove', remove),
    takeEvery('SourceAction/save', save),
    takeEvery('SourceAction/load', load),
    takeEvery('SourceAction/throwList', throwList),
    takeEvery('SourceAction/exportSource', exportSource),
    takeEvery('SourceAction/importSource', importSource),
]

/**
 * ソースを1件追加する
 */
function* add() {
    yield loadingShow('add new source...')

    const sf = yield select(sourceForm)

    yield put({
        type: 'SourceList/add',
        payload: {
            title: sf.title,
            text: sf.text,
            url: sf.url
        }
    })

    yield put({
        type: 'SourceForm/reset'
    })

    yield put ({
        type: 'SourceScreen/reset'
    })

    yield loadingHide()
}

/**
 * ソースを1件更新する
 */
function* update() {
    yield loadingShow('update source...')

    const sf = yield select(sourceForm)

    yield put({
        type: 'SourceList/update',
        payload: {
            title: sf.title,
            text: sf.text,
            url: sf.url,
            index: sf.index
        }
    })

    yield put({
        type: 'SourceForm/reset'
    })

    yield put ({
        type: 'SourceScreen/reset'
    })

    yield loadingHide()
}

/**
 * ソースを1件削除する
 * @param val PayloadAction<number>
 */
function* remove(val: PayloadAction<number>) {
    yield loadingShow('remove source...')

    yield put({
        type: 'SourceForm/reset'
    })
    yield put({
        type: 'SourceScreen/reset'
    })

    yield put({
        type: 'SourceList/remove',
        payload: val.payload
    })

    yield loadingHide()
}

/**
 * ソースリストをLocalStrageに保存する
 */
function* save() {
    yield loadingShow('save source...')

    const sf = yield select(sourceList)
    yield saveSourceList(sf.sources)

    yield loadingHide()

    yield showToast('save source success')
}

/**
 * ソースリストをLocalStrageから読み込む
 */
function* load() {
    yield loadingShow('load source...')

    const sf = yield loadSouceList()
    yield put({
        type: 'SourceList/set',
        payload: sf
    })

    yield loadingHide()
}   

/**
 * ソースリストをDispatch先に投げる
 * @param val PayloadAction<string>
 */
function* throwList(val: PayloadAction<string>) {
    const sf = yield select(sourceList)
    yield put({
        type: val.payload,
        payload: {
            source_list: sf.sources
        }
    })
}

/**
 * ソースリストをファイルにエクスポートする
 */
function* exportSource() {
    yield loadingShow('export source...')
    const sf = yield select(sourceList)
    yield downloadSourceList(sf.sources)
    yield loadingHide()
}

function* importSource(val: PayloadAction<React.DragEvent>) {
    yield loadingShow('import source...')
    // console.log(val.payload)
    const sources = yield loadDragFile(val.payload)

    yield put({
        type: 'SourceList/set',
        payload: sources
    })
    yield loadingHide()
}