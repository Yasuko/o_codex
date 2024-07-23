import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
    DocumentTextOptionType, initialDocumentTextOption
} from './__type.document'

export interface DocumentTextFormPropsInterface {
    DocumentTextForm? : DocumentTextFormInterface
    dispatch?  : Dispatch
}
export type DocumentTextFormInterface = DocumentTextOptionType & {
    index: number
}
export const initialState: DocumentTextFormInterface = {
    ...initialDocumentTextOption,
    index: -1
}

export const slice = createSlice({
    name: 'DocumentTextForm',
    initialState,
    reducers: {
        set: (
            state,
            action: PayloadAction<Partial<DocumentTextFormInterface>>
        ) => {
            console.log('DocumentTextForm set', action.payload)
            return Object.assign({}, state, action.payload)
        },
        setUrl: (
            state,
            action: PayloadAction<string>
        ) => {
            return Object.assign({}, state, {
                url: action.payload
            })
        },
        setTitle: (
            state,
            action: PayloadAction<string>
        ) => {
            return Object.assign({}, state, {
                title: action.payload
            })
        },
        setLoading: (
            state,
            action: PayloadAction<boolean>
        ) => {
            return Object.assign({}, state, {
                loading: action.payload
            })
        },
        setDocument: (
            state,
            action: PayloadAction<string[]>
        ) => {
            return Object.assign({}, state, {
                document: action.payload
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
