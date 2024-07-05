import { Dispatch, createSlice } from '@reduxjs/toolkit'

export interface AdminScreenPropsInterface {
    AdminScreen? : AdminScreenInterface
    dispatch?    : Dispatch
}
export type AdminScreenInterface = {
    document: boolean
    source: boolean
    token: boolean
}
export const initialState: AdminScreenInterface = {
    document: true,
    source: false,
    token: false
}

const slice = createSlice({
    name: 'AdminScreen',
    initialState,
    reducers: {
        document: (state) => {
            return Object.assign({}, state, {
                source: false,
                document: true,
                token: false
            })
        },
        source: (state) => {
            return Object.assign({}, state, {
                source: true,
                document: false,
                token: false
            })
        },
        token: (state) => {
            return Object.assign({}, state, {
                source: false,
                document: false,
                token: true
            })
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
