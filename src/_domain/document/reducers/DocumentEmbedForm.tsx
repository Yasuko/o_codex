import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DocumentEmbedOptionType, initialDocumentOption } from './__type.document'

export interface DocumentEmbedFormPropsInterface {
    DocumentEmbedForm? : DocumentEmbedFormInterface
    dispatch?          : Dispatch
}
export type DocumentEmbedFormInterface = DocumentEmbedOptionType & {
    index: number
}
export const initialState: DocumentEmbedFormInterface = {
    ...initialDocumentOption,
    index: -1
}

export const slice = createSlice({
    name: 'DocumentEmbedForm',
    initialState,
    reducers: {
        set: (
            state,
            action: PayloadAction<Partial<DocumentEmbedOptionType>>
        ) => {
            return Object.assign({}, state, action.payload)
        },
        setDocument: (
            state,
            action: PayloadAction<[string]>
        ) => {
            return Object.assign({}, state, {
                document: action.payload
            })
        },
        setEmbedding: (
            state,
            action: PayloadAction<number[][][]>
        ) => {
            return Object.assign({}, state, {
                embedding: action.payload
            })
        },
        setEmbeddingN: (
            state,
            action: PayloadAction<number[][][]>
        ) => {
            return Object.assign({}, state, {
                embedding_n: action.payload
            })
        },
        setKey: (
            state,
            action: PayloadAction<string>
        ) => {
            return Object.assign({}, state, {
                key: action.payload
            })
        },
        setIndex: (
            state,
            action: PayloadAction<number>
        ) => {
            return Object.assign({}, state, {
                index: action.payload
            })
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
