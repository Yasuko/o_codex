// import Library
import { ExportHelper } from '../../../_lib/_helper/export.helper'
import { DragService } from '../../../_lib/drag/drag.service'
import { StrageModel } from '../../_model/strage.model'
import { SourceOptionInterface, initialState } from '../reducers/SourceList'

/**
 * ソースリストをLocalStorageに保存する
 * @param source SourceOptionInterface[]
 * @returns 
 */
export const saveSourceList = async (
    source: SourceOptionInterface[]
): Promise<boolean> => {
    await StrageModel.call().saveSourceData(source)
    return true
}

/**
 * ソースリストをLocalStorageから取得する
 * @returns Promise<SourceOptionInterface[]>
 */
export const loadSouceList = async (
): Promise<SourceOptionInterface[]> => {
    const source = await StrageModel.call().loadSourceData()
    return (typeof source === 'object' && source !== null)
                ? source : initialState.sources
}

/**
 * ソースリストをダウンロードする
 * @param sources SourceOptionInterface[]
 * @returns 
 */
export const downloadSourceList = async (
    sources: SourceOptionInterface[]
): Promise<boolean> => {
    await ExportHelper.call()
                .setData(JSON.stringify(sources))
                .setExtension('json')
                .download('source_list.json')
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
    const jsonStr = decodeURIComponent(Array.prototype.map.call(decodedData, (c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    return JSON.parse(jsonStr)
}