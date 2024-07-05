import { cosineSimilarity } from '../../../_lib/Math/calc.service'
import { EmbedModel } from '../../_model/embed.model'
import { StrageModel } from '../../_model/strage.model'

/**
 * テキストデータを埋め込みデータに変換する
 * @param text string[][]
 * @returns Promise<number[][][]>
 */
export const textToEmbed = async (
    text: string[][]
): Promise<number[][][]> => {
    const key = await StrageModel.call().getAPI()
    if (typeof key === 'boolean') return []

    const embed = EmbedModel.call(key)

    const result: number[][][] = []
    for (let i = 0; i < text.length; i++) {
        const r: number[][] = []
        for (let j = 0; j < text[i].length; j++) {
            r.push(await callAPI(text[i][j], embed))
        }
        result.push(r)
    }

    return result
}

const callAPI = async (
    t: string,
    embed: EmbedModel
): Promise<number[]> => {
    const r = await embed.callEmbed(t)
    if (r === false) {
        return []
    }
    return r.data[0].embedding
}



/**
 * 埋め込みデータを丸め込む
 * @param embeddings number[]
 * @param max max: number = 2
 * @returns 
 */
export const trunkEmbedding = (
    embeddings: number[][][],
    max: number = 2
): number[][][] => {
    if (embeddings.length === 0) return []

    const r: number[][][] = []
    for (let i = 0; i < embeddings.length; i++) {
        if (Array.isArray(embeddings[i])) {
            const _r = embeddings[i].map((embed) => {
                return embed.map(num => parseFloat(num.toFixed(max)))
            })
            r.push(_r)
        }
    }
    return r
}

/**
 * 全埋込み要素のコサイン類似度を計算する
 * @param v1 {document: string, embedding: number[][], embedding_n: number[][]}[]
 * @param v2 number[]
 * @param trunk boolean = false
 * @returns number[][]
 */
export const CalcCosine = (
    v1: {
        document: string,
        embedding: number[][][],
        embedding_n: number[][][]
    }[],
    v2: number[],
    trunk: boolean = false
): {
    index1: number,
    index2: number,
    index3: number,
    score: number
}[] => {
    const _r:number[][][] = []
    scoreList = []
    for (let i = 0; i < v1.length; i++) {
        _r.push(doCosineSimilarity(
            trunk ? v1[i].embedding_n : v1[i].embedding,
            v2,
            i
        ))
    }
    return scoreList
}

/**
 * 
 * @param v1 number[][]
 * @param v2 number[]
 * @returns number[]
 */
const doCosineSimilarity = (
    v1: number[][][],
    v2: number[],
    index1: number
): number[][] => {
    const _r : number[][] = []
    for (let j = 0; j < v1.length; j++) {

        const r: number[] = []
        for (let i = 0; i < v1[j].length; i++) {
            const _v2 = [...v2]
            while(v1[j][i].length < v2.length) v1[j][i].push(0)
            const cosine = cosineSimilarity(v1[j][i], _v2)
            r.push(cosine)
            setScoreList(index1, j, i, cosine)
        }
        _r.push(r)
    }

    return _r
}

let scoreList: {
    index1: number,
    index2: number,
    index3: number,
    score: number
}[] = []

/**
 * scoreListのscoreと比較し
 * scoreListの件数が10件を超えた場合に
 * 次に渡されたscoreが最小値より大きい場合に
 * 最小値を削除し新しいscoreを追加する
 * @param index1 number
 * @param index2 number
 * @param index3 number
 * @param score number
 */
export const setScoreList = (
    index1: number,
    index2: number,
    index3: number,
    score: number
): void => {
    if (scoreList.length > 10) {
        if (scoreList.slice(-1)[0].score < score) {
            scoreList.splice(-1, 1)
            scoreList.push({index1, index2, index3, score})
            scoreList.sort((a, b) => b.score - a.score)
        }
    } else {
        scoreList.push({index1, index2, index3, score})
        scoreList.sort((a, b) => b.score - a.score)
    }
}

