/**********************************
 * SearchType
 *********************************/
export type SearchType = {
    word: string
    options: {[key: string]: string}[]
}

export const initialSearch: SearchType = {
    word: '',
    options: []
}

/**********************************
 * SearchResult
 **********************************/
export type ResultOptionType = {
    score: number
    document: string
    chunk: string
    title: string
    url: string
}

export type SearchResultType = {
    results: ResultOptionType[]
    results_n: ResultOptionType[]
}

export const initialSearchResult: SearchResultType = {
    results: [],
    results_n: []
}


/**********************************
 * SearchView
 **********************************/
export type SearchViewOptionType = {
    title: string
    url: string
    score: number
    chunk: string
    document: string
}

export const initialSearchView: SearchViewOptionType = {
    title: '',
    url: '',
    score: 0,
    chunk: '',
    document: ''
}



/**********************************
 * SearchScreen
 *********************************/
export type SearchScreenType = {
    home: boolean
    result: boolean
    token: boolean
}

export const initialSearchScreen: SearchScreenType = {
    home: true,
    result: false,
    token: false
}