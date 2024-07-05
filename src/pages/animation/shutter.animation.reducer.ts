import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ShutterAnimationPropsInterface {
    ShutterAnimation?: ShutterAnimationInterface
    dispatch?: Dispatch
}

export interface ShutterAnimationInterface {
    show: boolean
}

export const initialState: ShutterAnimationInterface = {
    show: false
}

const slice = createSlice({
    name: 'ShutterAnimation',
    initialState,
    reducers: {
        show: (
            state,
            action: PayloadAction<boolean>
        ) => {
            return Object.assign({}, state, {
                show: action.payload
            })
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
