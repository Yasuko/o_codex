import { put, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

// import model
import { StrageModel } from '../_model/strage.model'


export const RootTokenAction = [
    takeEvery('TokenAction/setToken', setToken),
]
function* setToken(
    val: PayloadAction<{
        token: string,
        toDispatch: string
    }
>) {
    yield StrageModel.call().setAPI(val.payload.token)
    
    yield put({
        type: val.payload.toDispatch
    })
}
