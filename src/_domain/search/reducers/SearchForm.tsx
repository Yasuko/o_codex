import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SearchType, initialSearch } from './__type.search'
import { duplicator } from '../../../_helper/object.helper'

export interface SearchFormPropsInterface {
    SearchForm? : SearchType
    dispatch?  : Dispatch
}
export type SearchFormInterface = SearchType
export const initialState: SearchFormInterface = initialSearch

export const slice = createSlice({
    name: 'SearchForm',
    initialState,
    reducers: {
        set: (
            state,
            action: PayloadAction<Partial<SearchType>>
        ) => {
            return Object.assign({}, state, {
                word: (action.payload.word) ? action.payload.word : state.word,
                options: (action.payload.options) ? action.payload.options : state.options
            })
        },
        setWord: (
            state,
            action: PayloadAction<string>) => {
            return Object.assign({}, state, {
                word: action.payload
            })
        },
        setOptions: (
            state,
            action: PayloadAction<{[key: string]: string}[]>
        ) => {
            return Object.assign({}, state, {
                options: action.payload
            })
        },
        addOption: (
            state,
            action: PayloadAction<{[key: string]: string}>
        ) => {
            const o = duplicator(state.options)
            o.push(action.payload)
            return Object.assign({}, state, {
                options: o
            })
        },
        updateOptions: (
            state,
            action: PayloadAction<{[key: string]: string | number}>
        ) => {
            const o = duplicator(state.options)
            o[action.payload.index] = {
                [action.payload.key]: action.payload.value
            }
            return Object.assign({}, state, {
                options: o
            })
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
