import { put, takeEvery } from 'redux-saga/effects'

// import model
import { StrageModel } from '../_model/strage.model'

// reducer

// Root Saga登録配列
export const RootAdminAction = [
    takeEvery('AdminAction/checkToken', checkToken),
]

export function* checkToken() {
    const token = yield StrageModel.call().getAPI()

    if (token === '' || token === false) {
        yield put({ type: 'AdminScreen/token' })
    }
}

