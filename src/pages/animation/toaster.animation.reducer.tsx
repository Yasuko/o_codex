import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface toasterAnimationPropsInterface {
    toasterAnimation?: toasterAnimationInterface
    dispatch?: Dispatch
}

/**
 *
 * toasterMode: 表示データの種別 背景色が変わる
 *  success : 成功
 *  info    : 情報
 *  warn    : 警告
 *  error   : 失敗
 */
export interface toasterAnimationInterface {
    show: boolean
    text: string
    mode: string
}

export const initialState = {
    show: false,
    text: '',
    mode: ''
};

const slice = createSlice({
    name: 'toasterAnimation',
    initialState,
    reducers: {
        setShow: (
            state,
            action: PayloadAction<{
                show: boolean
                text: string
                mode: string
            }>) => {
            return Object.assign({}, state, action.payload)
        },
        RESET: () => {
            return initialState
        }
    }
});

export default slice.reducer
