import { takeEvery } from 'redux-saga/effects'
import {
    verifyAPI,
    signOutAPI,
    getUUID,
    redirect
} from '../_model/auth.model'

// Root Saga登録配列
export const RootAuthAction = [
    takeEvery('AuthAction/verify', verify),
    takeEvery('AuthAction/signout', signout),
    takeEvery('AuthAction/login', login),
]

function* verify() {
    const r = yield verifyAPI()

    console.log(r)
}

function* signout() {
    const r = yield signOutAPI()

    console.log(r)
}

function* login() {
    const uuid = getUUID()
    console.log(uuid)

    yield redirect(uuid)
}

