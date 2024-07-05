import {
    EmbedOptions, initialEmbedOptions
} from '../../../_lib/gpt/type.service'


import {
    ChatOptions
} from '../../../_lib/gpt/type.service'

/**
 * チャットの型
 * @param role    : 'user' | 'system' | 'assistant' | 'null'
 * @param content : string
 * 
 */
export type Chat = {
    role    : 'user' | 'system' | 'assistant' | 'null',
    content : string,
}

/**
 * ChatReducerの型
 * @param options   : ChatOptions
 * @param newChat   : string
 * @param chatBlock : [Chat]
 * @param saveBlock : { [key: string]: [Chat] }
 * @param chatStack : string
 * 
 */
export type ChatFormType = {
    options     : ChatOptions
    newChat     : string
    chatBlock   : [Chat]
    saveBlock   : {
        [key: string]: [Chat]
    }
    chatStack   : string
}

/**
 * ChatFormの初期値
 * @param options   : ChatOptions
 * @param newChat   : string
 * @param chatBlock : [Chat]
 * @param saveBlock : { [key: string]: [Chat] }
 * @param chatStack : string
 */
export const initialChatForm: ChatFormType = {
    options     : {
        model       : 'gpt-3.5-turbo',
        messages    : [{
            role    : 'user',
            content : 'これから質問をするので、5才児にも伝わる内容で回答を考えて'
        }],
        temperature : 1,
        top_p       : 1,
        n           : 1,
        stream      : false,
        max_tokens  : 1000,
        presence_penalty: 0,
        frequency_penalty: 0,
    },
    newChat     : '',
    chatBlock   : [{
        role    : 'null',
        content : ''
    }],
    saveBlock   : {
        '': [{
            role    : 'null',
            content : ''
        }]
    },
    chatStack   : ''
};





/**
 * 取り込んだドキュメントの型
 * @param ids ドキュメントID
 * @param document ドキュメント本文
 * @param metaData メタデータ
 */
export type DictionaryType = {
    ids: string
    document: string
    metaData: [{
        [key: string]: string
    }]
}
/**
 * Embed2Dictionaryの型
 * @param docs Doctionary2Type[]
 */
export type EmbedDictionaryType = {
    docs: DictionaryType[]
}

/**
 * Embed2Dictionaryの初期値
 */
export const initialEmbedDictionary: EmbedDictionaryType = {
    docs: []
}

export type ImportFile = {
    name: string
    date: number
    type: 'pdf' | 'docx' | 'md' | 'txt'
    file: string
}

/**
 * Embed2Formの型
 * 
 */
export type EmbedFormType = {
    options     : EmbedOptions
    files       : ImportFile[]
    group       : string
    department  : string
}

/**
 * EmbedFormの初期値
 */
export const initialEmbedForm: EmbedFormType = {
    options     : initialEmbedOptions,
    files       : [],
    group       : '',
    department  : ''
}


export type EmbedQuestionType = {
    question: string
    group: string
    department: string
    start: number
    end: number
    result: any[]
}

export const initialEmbedQuestion: EmbedQuestionType = {
    question: '',
    group: '',
    department: '',
    start: 0,
    end: 0,
    result: []
}

export type EmbedShowDocumentType = {
    document: string
    metaData: any
}

export const initialEmbedShowDocument: EmbedShowDocumentType = {
    document: '',
    metaData: {}
}

export type EmbedScreenType = {
    searchForm: boolean
    chromaTest: boolean
    documentText: boolean
}

export const initialEmbedScreen: EmbedScreenType = {
    searchForm: false,
    chromaTest: false,
    documentText: false
}