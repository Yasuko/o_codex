// import Library
import { ExportHelper } from '../../../_lib/_helper/export.helper'
import { DragService } from '../../../_lib/drag/drag.service'
import { IndexDBModel } from '../../_model/indexdb.model'
import {
    DocumentEmbedListOptionInterface,
    initialState as initialDocumentEmbedList
} from '../reducers/DocumentEmbedList'
import {
    DocumentTextListOptionInterface,
    initialState as initialDocumentTextList
} from '../reducers/DocumentTextList'


/*
export const saveTextList = async (
    texts: DocumentTextListOptionInterface[]
): Promise<boolean> => {
    await StrageModel.call().saveDocumentTextData(texts)
    return true
}

export const loadTextList = async (
): Promise<DocumentTextListOptionInterface[]> => {
    const source = await StrageModel.call().loadDocumentTextData()
    return (typeof source === 'object' && source !== null)
                ? source : initialDocumentTextList.texts
}


export const saveEmbedList = async (
    embeds: DocumentEmbedListOptionInterface[]
): Promise<boolean> => {
    await StrageModel.call().saveDocumentEmbedData(embeds)
    return true
}

export const loadEmbedList = async (
): Promise<DocumentEmbedListOptionInterface[]> => {
    const source = await StrageModel.call().loadDocumentEmbedData()
    return (typeof source === 'object' && source !== null)
                ? source : initialDocumentEmbedList.embeds
}
*/

/**
 * HTML情報をIndexDBに保存する
 * @param texts DocumentTextListOptionInterface[]
 * @returns 
 */
export const saveTextList = async (
    texts: DocumentTextListOptionInterface[]
): Promise<boolean> => {
    await IndexDBModel.call().saveDocumentTextData(texts)
    return true
}

/**
 * HTML情報をIndexDBから取得する
 * @returns Promise<DocumentTextListOptionInterface[]>
 */
export const loadTextList = async (
): Promise<DocumentTextListOptionInterface[] | false> => {
    try {
        const source = await IndexDBModel.call().loadDocumentTextData()
        return (typeof source === 'object' && source !== null)
                    ? source : initialDocumentTextList.texts        
    } catch (error) {
        return false
    }

}

/**
 * 埋め込み情報をIndexDBに保存する
 * @param embeds DocumentEmbedListOptionInterface[]
 * @returns 
 */
export const saveEmbedList = async (
    embeds: DocumentEmbedListOptionInterface[]
): Promise<boolean> => {
    await IndexDBModel.call().saveDocumentEmbedData(embeds)
    return true
}

/**
 * 埋め込み情報をIndexDBから取得する
 * @returns Promise<DocumentEmbedListOptionInterface[]>
 */
export const loadEmbedList = async (
): Promise<DocumentEmbedListOptionInterface[] | false> => {
    try {
        const source = await IndexDBModel.call().loadDocumentEmbedData()
        return (typeof source === 'object' && source !== null)
                    ? source : initialDocumentEmbedList.embeds
    } catch (error) {
        return false
    }
}

export const downloadTextList = async (
    texts: DocumentTextListOptionInterface[]
): Promise<boolean> => {
    ExportHelper.call()
            .setData(JSON.stringify(texts))
            .setExtension('json')
            .download('text_list.json')
    return true
}

export const downloadEmbedList = async (
    embeds: DocumentEmbedListOptionInterface[]
): Promise<boolean> => {
    ExportHelper.call()
            .setData(JSON.stringify(embeds))
            .setExtension('json')
            .download('embed_list.json')
    return true
}

export const loadDragFile = async (
    e: React.DragEvent
): Promise<true> => {
    await DragService.call().onDrop(e);
    const file = DragService.call().getFile()
    const decodedData = window.atob(
                (file[0].data as string).split(',')[1]
            )
    // Uint8Arrayを初期化
    const uint8Array = new Uint8Array(decodedData.length);

    // ループを使用して各文字の文字コードをUint8Arrayに設定
    for (let i = 0; i < decodedData.length; i++) {
        uint8Array[i] = decodedData.charCodeAt(i);
    }
    
    // TextDecoderを使用してUTF-8文字列にデコード
    const decoder = new TextDecoder('utf-8');
    const decodedText = decoder.decode(uint8Array)

    return JSON.parse(decodedText)
}

