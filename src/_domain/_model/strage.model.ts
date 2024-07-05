import { LocalStrageService } from '../../_lib/strage/localstrage.service'

import {
    DocumentEmbedOptionType,
    DocumentTextOptionType,
} from '../document/reducers/__type.document'
import {
    SourceOptionType
} from '../source/reducers/__type.source'

/**
 * StrageModel
 * 
 * @description
 * StrageModel is a class that manages the local storage.
 * 
 * @method setAPI
 * @method getAPI
 * @method removeAPI
 * 
 */
export class StrageModel {
    private static instance: StrageModel

    private Strage: LocalStrageService | undefined = undefined

    public static call(): StrageModel
    {
        if (!StrageModel.instance) {
            StrageModel.instance = new StrageModel();
        }
        return StrageModel.instance;
    }

    public constructor()
    {
        this.Strage = LocalStrageService.call()
    }

    /**
     * setAPI
     * 
     * @description
     * Set the API key to the local storage.
     * @param value string
     * @returns 
     */
    public setAPI(value: string): StrageModel
    {
        this.Strage?.save('OEPNAI_API_KEY', value)
        return this
    }

    public async getAPI(): Promise<string | boolean>
    {
        if (!this.Strage) {
            return false
        }
        return await this.Strage.searchKey('OEPNAI_API_KEY')
    }

    public removeAPI(): StrageModel
    {
        this.Strage?.delete('OEPNAI_API_KEY')
        return this
    }

    /**
     * 
     * @param sources SourceOptionType[]
     * @returns Promise<StrageModel>
     */
    public async saveSourceData(
        sources: SourceOptionType[]
    ): Promise<StrageModel> {
        if (!this.Strage) {
            return this
        }
        this.Strage.save('sources', JSON.stringify(sources))
        return this
    }

    public async loadSourceData(): Promise<SourceOptionType[] | false> {
        if (!this.Strage) {
            return false
        }
        const sources = await this.Strage.searchKey('sources')

        if (!sources) return false
        return JSON.parse(sources as string)
    }

    public async saveDocumentTextData(
        texts: DocumentTextOptionType[]
    ): Promise<StrageModel> {
        if (!this.Strage) {
            return this
        }
        this.Strage.save('documentTexts', JSON.stringify(texts))
        return this
    }

    public async loadDocumentTextData(

    ): Promise<DocumentTextOptionType[] | false> {
        if (!this.Strage) {
            return false
        }
        const documents = await this.Strage.searchKey('documentTexts')

        if (
            typeof documents !== 'string'
            || documents === undefined
            || documents === 'undefined'
        ) return false

        return JSON.parse(documents as string)
    }


    public async saveDocumentEmbedData(
        embed: DocumentEmbedOptionType[]
    ): Promise<StrageModel> {
        console.log(embed)
        if (!this.Strage) {
            return this
        }
        this.Strage.save('documentEmbeds', JSON.stringify(embed))
        return this
    }

    public async loadDocumentEmbedData(
        
    ): Promise<DocumentEmbedOptionType[] | false> {
        if (!this.Strage) {
            return false
        }
        const documents = await this.Strage.searchKey('documentEmbeds')

        if (
            typeof documents !== 'string'
            || documents === undefined
            || documents === 'undefined'
        ) return false

        return JSON.parse(documents as string)
    }
}
