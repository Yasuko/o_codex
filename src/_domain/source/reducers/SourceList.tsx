import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
    SourceType,
    SourceOptionType,
    initialSource
} from './__type.source'
import { duplicator } from '../../../_helper/object.helper'

export interface SourceListPropsInterface {
    SourceList?: SourceListInterface
    dispatch?: Dispatch
}

export type SourceOptionInterface = SourceOptionType
export type SourceListInterface = SourceType
export const initialState: SourceListInterface = initialSource

export const slice = createSlice({
    name: 'SourceList',
    initialState,
    reducers: {
        set: (
            state,
            action: PayloadAction<SourceListInterface>
        ) => {
            return Object.assign({}, state, {
                sources: action.payload
            })
        },
        add: (
            state,
            action: PayloadAction<SourceOptionInterface>
        ) => {
            const s = duplicator(state.sources)
            s.push({
                title: action.payload.title,
                text: action.payload.text,
                url: action.payload.url
            })
            return Object.assign({}, state, {
                sources: s
            })
        },
        update: (
            state,
            action: PayloadAction<
                SourceOptionInterface & { index: number }
            >
        ) => {
            const s = duplicator(state.sources)
            s[action.payload.index] = {
                title: action.payload.title,
                text: action.payload.text,
                url: action.payload.url
            }
            return Object.assign({}, state, {
                sources: s
            })
        },
        remove: (
            state,
            action: PayloadAction<number>
        ) => {
            const s = duplicator(state.sources)
            s.splice(action.payload, 1)
            return Object.assign({}, state, {
                sources: s
            })
        },
        page: (
            state,
            action: PayloadAction<number>
        ) => {
            return Object.assign({}, state, {
                page: action.payload
            })
        },
        maxList: (
            state,
            action: PayloadAction<number>
        ) => {
            return Object.assign({}, state, {
                max_list: action.payload
            })
        },
        reset: () => {
            return initialState;
        }
    }
})

export default slice.reducer
