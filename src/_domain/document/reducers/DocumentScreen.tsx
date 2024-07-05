import { Dispatch, createSlice } from '@reduxjs/toolkit'
import {
    DocumentScreenType, initialDocumentScreen
} from './__type.document'

export interface DocumentScreenPropsInterface {
    DocumentScreen?: DocumentScreenInterface
    dispatch?: Dispatch
}
export type DocumentScreenInterface = DocumentScreenType
export const initialState: DocumentScreenInterface = initialDocumentScreen

const slice = createSlice({
    name: 'DocumentScreen',
    initialState,
    reducers: {
        home: (state) => {
            return Object.assign({}, state, {
                home: (state.home)? false: true
            })
        },
        new: (state) => {
            return Object.assign({}, state, {
                home: false,
                new: (state.new)? false: true
            })
        },
        textEdit: (state) => {
            return Object.assign({}, state, {
                home: false,
                text_edit: (state.text_edit)? false: true
            })
        },
        textView: (state) => {
            return Object.assign({}, state, {
                home: false,
                text_view: (state.text_view)? false: true
            })
        },
        textRemove: (state) => {
            return Object.assign({}, state, {
                home: false,
                text_remove: (state.text_remove)? false: true
            })
        },
        embedEdit: (state) => {
            return Object.assign({}, state, {
                home: false,
                embed_edit: (state.embed_edit)? false: true
            })
        },
        embedView: (state) => {
            return Object.assign({}, state, {
                home: false,
                embed_view: (state.embed_view)? false: true
            })
        },
        embedRemove: (state) => {
            return Object.assign({}, state, {
                home: false,
                embed_remove: (state.embed_remove)? false: true
            })
        },
        import: (state) => {
            return Object.assign({}, state, {
                home: false,
                import: (state.import)? false: true
            })
        },
        reset: () => {
            return initialState;
        }
    }
})

export default slice.reducer
