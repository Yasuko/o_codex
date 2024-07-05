import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DocumentViewOptionType, initialDocumentViewOption } from './__type.document'

export interface DocumentEmbedViewPropsInterface {
    DocumentEmbedView? : DocumentEmbedViewInterface
    dispatch?          : Dispatch
}
export type DocumentEmbedViewInterface = DocumentViewOptionType
export const initialState: DocumentEmbedViewInterface = initialDocumentViewOption

const slice = createSlice({
    name: 'DocumentEmbedView',
    initialState,
    reducers: {
        set: (
            state,
            action: PayloadAction<Partial<DocumentEmbedViewInterface>>
        ) => {
            return Object.assign({}, state, action.payload)
        },
        setDoument: (
            state,
            action: PayloadAction<string>
        ) => {
            return Object.assign({}, state, {
                document: action.payload
            })
        },
        setEmbedding: (
            state,
            action: PayloadAction<number[][]>
        ) => {
            return Object.assign({}, state, {
                embedding: action.payload
            })
        },
        setEmbeddingN: (
            state,
            action: PayloadAction<number[][]>
        ) => {
            return Object.assign({}, state, {
                embedding_n: action.payload
            })
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
