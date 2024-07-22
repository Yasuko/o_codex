import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'

import {
    DocumentTextListType,
    DocumentTextOptionType,
    initialDocumentTextList
} from './__type.document'
import { duplicator } from '../../../_helper/object.helper'

export interface DocumentTextListPropsInterface {
    DocumentTextList?: DocumentTextListInterface
    dispatch?: Dispatch
}

export type DocumentTextListOptionInterface = DocumentTextOptionType
export type DocumentTextListInterface = DocumentTextListType
export const initialState: DocumentTextListInterface = initialDocumentTextList

const slice = createSlice({
    name: 'DocumentTextList',
    initialState,
    reducers: {
        set: (
            state,
            action: PayloadAction<DocumentTextListInterface>
        ) => {
            return Object.assign({}, state, {
                texts: action.payload.texts
            })
        },
        add: (
            state,
            action: PayloadAction<
                        DocumentTextListOptionInterface & {
                            key: string
                        }
                    >
        ) => {
            const s = duplicator(state.texts)
            s.push({
                title: action.payload.title,
                url: action.payload.url,
                loading: action.payload.loading,
                document: action.payload.document,
                embedding: action.payload.embedding,
                key: action.payload.key,
                chunk: action.payload.chunk
            })
            return Object.assign({}, state, {
                texts: s
            })
        },
        update: (
            state,
            action: PayloadAction<
            DocumentTextListOptionInterface
                & { index: number }
            >
        ) => {
            const s = duplicator(state.texts)
            s[action.payload.index] = {
                title: action.payload.title,
                url: action.payload.url,
                loading: action.payload.loading,
                document: action.payload.document,
                embedding: action.payload.embedding,
                key: action.payload.key,
                chunk: action.payload.chunk
            }
            return Object.assign({}, state, {
                texts: s
            })
        },
        remove: (
            state,
            action: PayloadAction<number>
        ) => {
            const s = duplicator(state.texts)
            s.splice(action.payload, 1)
            return Object.assign({}, state, {
                texts: s
            })
        },
        setPage: (
            state,
            action: PayloadAction<number>
        ) => {
            return Object.assign({}, state, {
                page: action.payload
            })
        },
        setMaxList: (
            state,
            action: PayloadAction<number>
        ) => {
            return Object.assign({}, state, {
                max_list: action.payload
            })
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
