import { loadURL } from '../../_model/api.model'

export const loadHTMLContent = async (
    data: {
        text: string,
        title: string,
        url: string
    }
): Promise<string[]> => {

    const result: string[] = []
    
    const r = await loadURL(data.url)

    if (!r) result.push('')
    result.push(r)

    await sleep(100)
    return result
}

const sleep = (ms: number): Promise<void> => {
    console.log(`sleep ${ms} ms`)
    return new Promise(resolve => setTimeout(resolve, ms))
}
