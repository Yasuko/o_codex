import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
    DocumentEmbedListType,
    DocumentEmbedOptionType,
    initialDocumentEmbedList
} from './__type.document'
import { duplicator } from '../../../_helper/object.helper'

export interface DocumentEmbedListPropsInterface {
    DocumentEmbedList?: DocumentEmbedListInterface
    dispatch?: Dispatch
}

export type DocumentEmbedListOptionInterface = DocumentEmbedOptionType
export type DocumentEmbedListInterface = DocumentEmbedListType
export const initialState: DocumentEmbedListInterface = initialDocumentEmbedList

export const slice = createSlice({
    name: 'DocumentEmbedList',
    initialState,
    reducers: {
        set: (
            state,
            action: PayloadAction<DocumentEmbedListInterface>
        ) => {
            return Object.assign({}, state, {
                embeds: action.payload.embeds
            })
        },
        add: (
            state,
            action: PayloadAction<DocumentEmbedListOptionInterface & {key: string}>
        ) => {
            const s = duplicator(state.embeds)
            s.push({
                document: action.payload.document,
                embedding: action.payload.embedding,
                embedding_n: action.payload.embedding_n,
                key: action.payload.key
            })
            return Object.assign({}, state, {
                embeds: s
            })
        },
        update: (
            state,
            action: PayloadAction<
                DocumentEmbedListOptionInterface
                & {
                    key: string,
                    index: number,
                }
            >
        ) => {
            const s = duplicator(state.embeds)
            s[action.payload.index] = {
                document: action.payload.document,
                embedding: action.payload.embedding,
                embedding_n: action.payload.embedding_n,
                key: action.payload.key
            }
            return Object.assign({}, state, {
                embeds: s
            })
        },
        remove: (
            state,
            action: PayloadAction<{
                key :string,
                index: number
            }>
        ) => {
            const s = duplicator(state.embeds)
            s.splice(action.payload.index, 1)
            return Object.assign({}, state, {
                embeds: s
            })
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
