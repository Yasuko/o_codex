import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ScoreAnimationPropsInterface {
    ScoreAnimation?: ScoreAnimationInterface
    dispatch?: Dispatch
}

export interface ScoreText {
    title: string
    score: number | string
}

export interface ScoreAnimationInterface {
    show: boolean
    texts: ScoreText[] | undefined
}

export const initialState: ScoreAnimationInterface = {
    show: false,
    texts: undefined
}

const slice = createSlice({
    name: 'ScoreAnimation',
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
        setTexts: (
            state,
            action: PayloadAction<{
                texts: ScoreText[]
            }>) => {
            return Object.assign({}, state, {
                texts: action.payload.texts
            })
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
