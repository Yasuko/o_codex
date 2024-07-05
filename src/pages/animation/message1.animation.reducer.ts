import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Message1AnimationPropsInterface {
    Message1Animation?: Message1AnimationInterface
    dispatch?: Dispatch
}

export interface Message1AnimationInterface {
    show: boolean
    message: string
}

export const initialState: Message1AnimationInterface = {
    show: false,
    message: ''
}

const slice = createSlice({
    name: 'Message1Animation',
    initialState,
    reducers: {
        show: (
            state,
            action: PayloadAction<{
                show: boolean
            }>
        ) => {
            return Object.assign({}, state, {
                show: action.payload.show
            })
        },
        setMessage: (
            state,
            action: PayloadAction<{
                message: string
            }>
        ) => {
            return Object.assign({}, state, {
                message: action.payload.message
            })
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
