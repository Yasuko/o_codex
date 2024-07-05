import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
    SourceFormType, initialSourceOption,
} from './__type.source'

export interface SourceFormPropsInterface {
    SourceForm?: SourceFormInterface
    dispatch?: Dispatch
}
export type SourceFormInterface = SourceFormType
export const initialState: SourceFormInterface = initialSourceOption

const slice = createSlice({
    name: 'SourceForm',
    initialState,
    reducers: {
        set: (
            state,
            action: PayloadAction<SourceFormType>
        ) => {
            return Object.assign({}, state, action.payload)
        },
        setIndex: (
            state,
            action: PayloadAction<number>) => {
            return Object.assign({}, state, {
                index: action.payload
            })
        },
        setTitle: (
            state,
            action: PayloadAction<string>) => {
            return Object.assign({}, state, {
                title: action.payload
            })
        },
        setText: (
            state,
            action: PayloadAction<string>) => {
            return Object.assign({}, state, {
                text: action.payload
            })
        },
        setURL: (
            state,
            action: PayloadAction<string>) => {
            return Object.assign({}, state, {
                url: action.payload
            })
        },
        reset: () => {
            return initialState;
        }
    }
})

export default slice.reducer
