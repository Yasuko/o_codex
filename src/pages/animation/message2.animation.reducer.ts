import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Message2AnimationPropsInterface {
    Message2Animation?: Message2AnimationInterface
    dispatch?: Dispatch
}

export interface Message2AnimationInterface {
    show: boolean
    message: string
}

export const initialState: Message2AnimationInterface = {
    show: false,
    message: ''
}

const slice = createSlice({
    name: 'Message2Animation',
    initialState,
    reducers: {
        show: (
            state,
            action: PayloadAction<{
                show: boolean
            }>) => {
            return Object.assign({}, state, {
                show: action.payload.show
            })
        },
        setMessage: (
            state,
            action: PayloadAction<{
                message: string
            }>) => {
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
