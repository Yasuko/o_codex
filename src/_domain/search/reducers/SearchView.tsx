import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SearchViewOptionType, initialSearchView } from './__type.search'

export interface SearchViewPropsInterface {
    SearchView? : SearchViewInterface
    dispatch?  : Dispatch
}
export type SearchViewInterface = SearchViewOptionType
export const initialState: SearchViewInterface = initialSearchView

export const slice = createSlice({
    name: 'SearchView',
    initialState,
    reducers: {
        set: (
            state,
            action: PayloadAction<Partial<SearchViewInterface>>
        ) => {
            return Object.assign({}, state, action.payload)
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
