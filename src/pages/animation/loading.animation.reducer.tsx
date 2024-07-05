import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface loadingAnimationPropsInterface {
    loadingAnimation?: loadingAnimationInterface;
    dispatch?: Dispatch
}

export interface loadingAnimationInterface {
    show    : boolean;
    message : string;
}

export const initialState = {
    show    : false,
    message : 'Now Yomikonderunen....'
};

const slice = createSlice({
    name: 'loadingAnimation',
    initialState,
    reducers: {
        setShow: (
            state,
            action: PayloadAction<{
                show    : boolean,
                message : string
            }>
        ) => {
            const ms = action.payload.message
                        ? action.payload.message
                        : initialState.message
            return Object.assign({}, state, {
                show        : action.payload.show,
                message     : ms
            })
        }
    }
})

export default slice.reducer

