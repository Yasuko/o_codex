import { DocumentTextOptionType } from "../reducers/__type.document"
import { HashService } from "../../../_lib/hash/hash.service"

export type TagArrayType = {
    tag: string,
    text: string
}

export type ScoreListType = {
    score: number,
    document: string,
    chunk: string,
    title: string,
    url: string
}

export const hash = async (txt:string) => {
    return await HashService.call().sha256(txt)
}

export class ParseHelper {
    static instance: ParseHelper

    #chunkSize: number = 200
    #convertResult: string[] = []

    #url: string[] = []
    #title: string[] = []

    public constructor() {
        return this
    }

    public static call(): ParseHelper {
        if (!ParseHelper.instance) {
            ParseHelper.instance = new ParseHelper()
        }
        return ParseHelper.instance
    }

    public setChunkSize(size: number): ParseHelper {
        this.#chunkSize = size
        return this
    }

    public setOption(
        options: Partial<{
            url: string[],
            title: string[]
        }>
    ): ParseHelper {
        this.#url = options.url || []
        this.#title = options.title || []
        return this
    }

    public getResult(): string[] {
        return this.#convertResult
    }

    public parseTag(tag: TagArrayType[]): ParseHelper {
        this.#convertResult = []
        this.#convertToBlocks(tag).map(_t => this.#convertResult.push(_t))
        return this
    }

    public async mergeOption(
        sources: {
            title: string;
            text: string;
            url: string;
            index: number;
        }
    ): Promise<DocumentTextOptionType> {
        return {
            title: sources.title,
            url: sources.url,
            loading: false,
            document: this.#convertResult,
            embedding: false,
            key: await hash(sources.url),
            chunk: this.chunkText(this.#convertResult)
        }
    }

    /**
     * テキストを指定したサイズで分割する
     * @param texts string[]
     * @returns string[][]
     */
    public chunkText(texts: string[]): string[][] {

        const chunkedArray: string[][] = texts.map(val => {
            return this.#sliceChunk(val)
        })

        const result: string[][] = []
        chunkedArray.forEach(val => {
            result.push(val)
        })

        return result
    }

    /**
     * スコア情報とドキュメント情報を結合する
     * @param scores { index1: number, index2: number, index3: number, score: number}
     * @param documents string[][]
     * @param chunk string[][][]
     * @param title string[]
     * @param url string[]
     * @returns ScoreListType[]
     */
    public scoreToDocument(
        scores: {
            index1: number,
            index2: number,
            index3: number,
            score: number
        }[],
        documents: string[][],
        chunk: string[][][],
        title: string[],
        url: string[]
    ): ScoreListType[] {

        const result: ScoreListType[] = []

        scores.forEach(score => {
            result.push({
                score: score.score,
                document: documents[score.index1][score.index2],
                chunk: chunk[score.index1][score.index2][score.index3],
                title: title[score.index1],
                url: url[score.index1]
            })
        })

        return result
    }

    /**
     * 
     * @param text string
     * @returns string[]
     */
    #sliceChunk(text: string): string[] {
        const chunkedArray: string[] = []
        for (let i = 0; i < text.length; i += this.#chunkSize) {
            chunkedArray.push(text.slice(i, i + this.#chunkSize))
        }
        return chunkedArray
    }

    #convertToBlocks(data: TagArrayType[]): string[] {
        const blocks: string[] = []
        let currentBlock = ""

        data.forEach((item, index) => {
            if (item.tag === 'h1' || item.tag === 'h2' || item.tag === 'h3') {
                if (currentBlock) {
                    blocks.push(currentBlock + '\n')
                }
                currentBlock = item.text
            } else {
                currentBlock += '\n' + item.text
            }

            // 最後の要素の場合、現在のブロックを追加
            if (index === data.length - 1) {
                blocks.push(currentBlock + '\n')
            }
        })

        return blocks
    }
}