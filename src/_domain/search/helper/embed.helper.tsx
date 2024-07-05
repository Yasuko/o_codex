import { EmbedModel } from '../../_model/embed.model'
import { StrageModel } from '../../_model/strage.model'

export const textToEmbed = async (
    text: string
): Promise<number[]> => {
    const key = await StrageModel.call().getAPI()
    if (typeof key === 'boolean') return []

    const embed = EmbedModel.call(key)

    const r = await embed.callEmbed(text)
    if (r === false) return []
    
    return r.data[0].embedding
}


/**
 * 埋め込みデータを丸め込む
 * @param embeddings number[]
 * @param max max: number = 2
 * @returns 
 */
export const trunkEmbedding = (
    embeddings: number[],
    max: number = 2
): number[] => {
    if (embeddings.length === 0) return []

    const r: number[] = []
    if (Array.isArray(embeddings)) {
        return embeddings.map(num => parseFloat(num.toFixed(max)))
    }

    return r
}
