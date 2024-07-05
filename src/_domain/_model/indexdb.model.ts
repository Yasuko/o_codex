import { IndexedDBService } from '../../_lib/strage/indexeddb.service'

import {
    DocumentEmbedOptionType,
    DocumentTextOptionType,
} from '../document/reducers/__type.document'
import {
    SourceOptionType
} from '../source/reducers/__type.source'

export type IndexDBOptionType = {
    DbName: string,
    Version: number,
    StoreName: string[]
}



/**
 */
export class IndexDBModel {
    private static instance: IndexDBModel

    #Strage: IndexedDBService
    #Options: IndexDBOptionType = {
        DbName: 'OEPNAI',
        Version: 1,
        StoreName: ['sources', 'documentTexts', 'documentEmbeds']
    }

    public static call(): IndexDBModel
    {
        if (!IndexDBModel.instance) {
            IndexDBModel.instance = new IndexDBModel();
        }
        return IndexDBModel.instance;
    }

    public constructor()
    {
        this.#Strage = IndexedDBService.call()
    }

    public async connect(option: Partial<{
        DbName: string,
        Version: number,
        StoreName: string[]
    }> = {}): Promise<boolean>
    {
        if (!this.#Strage) {
            return false
        }

        this.#Options = {
            ...this.#Options,
            ...option
        }

        return await this.#Strage.openDB(
            this.#Options.DbName,
            this.#Options.Version,
            this.#Options.StoreName
        )
    }

    public async saveSourceData(
        sources: SourceOptionType[]
    ): Promise<IndexDBModel> {
        if (this.#Strage.checkConnection() === false){
            if (await this.connect() === false) return this
        }

        await this.#Strage?.putData('sources', sources)
        return this
    }

    public async loadSourceData(): Promise<SourceOptionType[] | false> {
        if (!this.#Strage === false) {
            if (await this.connect() === false) return false
        }
        const sources = await this.#Strage.getAllData('sources') as SourceOptionType[] | false

        if (!sources) return false
        return sources
    }

    public async saveDocumentTextData(
        texts: DocumentTextOptionType[]
    ): Promise<IndexDBModel> {
        if (this.#Strage.checkConnection() === false) {
            console.log('unkown connection status')
            if (await this.connect() === false) return this
        }
        await this.#Strage?.putData('documentTexts', {id: 'texts', texts})
        return this
    }

    public async loadDocumentTextData(): Promise<DocumentTextOptionType[] | false> {
        if (this.#Strage.checkConnection() === false) {
            if (await this.connect() === false) return false
        }
        const documents = await this.#Strage?.getData('documentTexts', 'texts') as {
            id: 'texts',
            texts: DocumentTextOptionType[]
        } | false

        if (documents === false) return false
        return documents.texts
    }


    public async saveDocumentEmbedData(
        embed: DocumentEmbedOptionType[]
    ): Promise<IndexDBModel> {
        if (this.#Strage.checkConnection() === false) {
            if (await this.connect() === false) return this
        }
        this.#Strage?.putData('documentEmbeds', {id: 'embeds', embed})
        return this
    }

    public async loadDocumentEmbedData(): Promise<DocumentEmbedOptionType[] | false> {
        if (this.#Strage.checkConnection() === false) {
            if (await this.connect() === false) return false
        }
        const documents = await this.#Strage?.getData('documentEmbeds', 'embeds') as {
            id: 'embeds',
            embed: DocumentEmbedOptionType[]
        } | false

        if (documents === false) return false

        return documents.embed
    }
}
