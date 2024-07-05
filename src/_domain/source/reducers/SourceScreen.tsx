import { Dispatch, createSlice } from '@reduxjs/toolkit'
import {
    SourceScreenType, initialSourceScreen
} from './__type.source'

export interface SourceScreenPropsInterface {
    SourceScreen?: SourceScreenInterface
    dispatch?: Dispatch
}
export type SourceScreenInterface = SourceScreenType
export const initialState: SourceScreenInterface = initialSourceScreen

const slice = createSlice({
    name: 'SourceScreen',
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
        edit: (state) => {
            return Object.assign({}, state, {
                home: false,
                edit: (state.edit)? false: true
            })
        },
        view: (state) => {
            return Object.assign({}, state, {
                home: false,
                view: (state.view)? false: true
            })
        },
        remove: (state) => {
            return Object.assign({}, state, {
                home: false,
                remove: (state.remove)? false: true
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
