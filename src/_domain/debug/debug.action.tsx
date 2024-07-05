import { put, select, take, takeEvery } from 'redux-saga/effects'
import { loadingShow, loadingHide } from '../animation/animation'

// import helper

// reducer

// Root Saga登録配列
export const RootDebugAction = [
    takeEvery('DebugAction/deleteChromadb', deleteChromadb),
    takeEvery('DebugAction/getAllChromadbData', getAllChromadbData),
    takeEvery('DebugAction/searchChromadb', searchChromadb),

    takeEvery('DebugAction/result', result),
]

function* deleteChromadb(val: any): any {
    yield put({
        type        : 'JobStack/setJobStack',
        jobs        : [{
            job         : 'debug',
            dispatch    : 'DebugAction/result',
            task        : 'messages',
            options     : {
                task    : 'deleteChroma',
            }
        }]
    })

    yield put({
        type        : 'SocketAction/send',
        message     : {
            task    : 'debug',
            job     : 'deleteChroma',
        }
    })
}

function* getAllChromadbData(val: any): any {
    yield put({
        type        : 'JobStack/setJobStack',
        jobs        : [{
            job         : 'debug',
            dispatch    : 'DebugAction/result',
            task        : 'messages',
            options     : {
                task    : 'getAllChroma',
            }
        }]
    })

    yield put({
        type        : 'SocketAction/send',
        message     : {
            task    : 'debug',
            job     : 'getAllChroma',
        }
    })
}

function* searchChromadb(val: any): any {
    yield put({
        type        : 'JobStack/setJobStack',
        jobs        : [{
            job         : 'debug',
            dispatch    : 'DebugAction/result',
            task        : 'messages',
            options     : {
                task    : 'searchChroma',
            }
        }]
    })

    yield put({
        type        : 'SocketAction/send',
        message     : {
            task    : 'debug',
            job     : 'searchChroma',
            data    : {
                input    : val.input,
            }
        }
    })
}

function* result(val: any): any {
    yield loadingHide()

    console.log(val)
}