export type DocumentViewOptionType = {
    document: string
    embedding: number[][]
    embedding_n: number[][]
}

export const initialDocumentViewOption: DocumentViewOptionType = {
    document: '',
    embedding: [],
    embedding_n: []
}

/**********************************
 * DocumentEmbedOption
 * - document: string[]
 * - embedding: number[]
 * - embedding_n: number[]
 * - key: string
*********************************/
export type DocumentEmbedOptionType = {
    document: string[]
    embedding: number[][][]
    embedding_n: number[][][]
    key: string
}

export const initialDocumentOption: DocumentEmbedOptionType = {
    document: [],
    embedding: [],
    embedding_n: [],
    key: ''
}


/**********************************
 * DocumentEmbedList
 *********************************/
export type DocumentEmbedListType = {
    embeds: DocumentEmbedOptionType[]
    page: number
    max_list: number
}

export const initialDocumentEmbedList: DocumentEmbedListType = {
    embeds: [],
    page: 0,
    max_list: 10
}


/**********************************
 * DocumentTextOption
 * - title: string
 * - url: string
 * - loading: boolean
 * - document: string[]
 * - embedding: boolean
 * - key: string
 * - chunk: string[][]
*********************************/
export type DocumentTextOptionType = {
    title: string
    url: string
    loading: boolean
    embedding: boolean
    document: string[]
    key: string
    chunk: string[][]
}

export const initialDocumentTextOption: DocumentTextOptionType = {
    title: '',
    url: '',
    loading: false,
    document: [],
    embedding: false,
    key: '',
    chunk: []
}



/**********************************
 * DocumentTextList
 *********************************/
export type DocumentTextListType = {
    texts: DocumentTextOptionType[]
    page: number
    max_list: number
}

export const initialDocumentTextList: DocumentTextListType = {
    texts: [],
    page: 0,
    max_list: 10
}

/**********************************
 * DocumentScreen
 *********************************/
export type DocumentScreenType = {
    home: boolean
    new: boolean
    text_edit: boolean
    text_view: boolean
    text_remove: boolean
    embed_edit: boolean
    embed_view: boolean
    embed_remove: boolean
    import: boolean
}

export const initialDocumentScreen: DocumentScreenType = {
    home: true,
    new: false,
    text_edit: false,
    text_view: false,
    text_remove: false,
    embed_edit: false,
    embed_view: false,
    embed_remove: false,
    import: false
}