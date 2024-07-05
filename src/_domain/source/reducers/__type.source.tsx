/**********************************
 * Source
 *********************************/
export type SourceOptionType = {
    title: string
    text: string
    url: string
}

export type SourceFormType = SourceOptionType & {
    index: number
}

export type SourceType = {
    sources: SourceOptionType[]
    page: number
    max_list: number
}

export const initialSourceOption: SourceFormType = {
    title: '',
    text: '',
    url: '',
    index: -1
}

export const initialSource: SourceType = {
    sources: [],
    page: 0,
    max_list: 10
}

/**********************************
 * DocumentScreen
 *********************************/
export type SourceScreenType = {
    home: boolean
    new: boolean
    edit: boolean
    view: boolean
    remove: boolean
    import: boolean
}

export const initialSourceScreen: SourceScreenType = {
    home: true,
    new: false,
    edit: false,
    view: false,
    remove: false,
    import: false
}