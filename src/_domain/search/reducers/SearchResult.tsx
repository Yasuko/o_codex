import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
    SearchResultType, ResultOptionType,
    initialSearchResult
} from './__type.search'

export interface SearchResultPropsInterface {
    SearchResult?: SearchResultInterface
    dispatch?: Dispatch
}

export type ResultInterface = ResultOptionType
export type SearchResultInterface = SearchResultType
export const initialState: SearchResultInterface = initialSearchResult

export const slice = createSlice({
    name: 'SearchResult',
    initialState,
    reducers: {
        set: (
            state,
            action: PayloadAction<SearchResultType>
        ) => {
            return Object.assign({}, state, action.payload)
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
