import { put } from 'redux-saga/effects'

/**
 * 読み込み中アニメーション表示
 * @param message string
 * @returns any
 */
export function* loadingShow(message: string) {
    yield put({
        type        : 'loadingAnimation/setShow',
        payload     : {
            show        : true,
            message     : message
        }
    })
}

/**
 * 読み込み中アニメーション非表示
 * @returns any
 */
export function* loadingHide() {
    yield put({
        type        : 'loadingAnimation/setShow',
        payload     : {
            show        : false,
            message     : ''
        }
    })
}

export function* showToast(message: string) {
    yield put({
        type        : 'toasterAnimation/setShow',
        payload     : {
            message: message,
            show: true,
            mode: 'info'
        }
    })
}