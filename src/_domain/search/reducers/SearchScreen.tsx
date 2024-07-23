import { Dispatch, createSlice } from '@reduxjs/toolkit'
import {
    SearchScreenType, initialSearchScreen
} from './__type.search'

export interface SearchScreenPropsInterface {
    SearchScreen?: SearchScreenInterface
    dispatch?: Dispatch
}
export type SearchScreenInterface = SearchScreenType
export const initialState: SearchScreenInterface = initialSearchScreen

export const slice = createSlice({
    name: 'SearchScreen',
    initialState,
    reducers: {
        home: (state) => {
            return Object.assign({}, state, {
                home: true
            })
        },
        result: (state) => {
            return Object.assign({}, state, {
                home: false,
                result: true
            })
        },
        token: (state) => {
            return Object.assign({}, state, {
                home: false,
                token: true
            })
        },
        reset: () => {
            return initialState;
        }
    }
})

export default slice.reducer
