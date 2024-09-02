import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'

export type AuthType = {
    authenticated: boolean
}

export interface AuthPropsInterface {
    Auth? : AuthType
    dispatch?  : Dispatch
}
export type AuthInterface = AuthType
export const initialState: AuthInterface = {
    authenticated: false
}

export const slice = createSlice({
    name: 'SearchForm',
    initialState,
    reducers: {
        set: (
            state,
            action: PayloadAction<boolean>
        ) => {
            return Object.assign({}, state, {
                authenticated: action.payload
            })
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
