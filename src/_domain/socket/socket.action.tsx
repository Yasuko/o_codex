import { put, select, takeEvery } from 'redux-saga/effects'

// import helper
import { SocketHelper } from './helper/socket.helper'
import { ParseHelper } from './helper/parse.helper'

import { loadingHide } from '../animation/animation'

// import reducer
import {
    JobStackPropsInterface,
    JobStackInterface
} from '../_all/reducers/JobStack'

const JobStack = (state: JobStackPropsInterface) => state.JobStack

// Root Saga登録配列
export const RootSocketAction = [
    takeEvery('SocketAction/hub', hub),
    takeEvery('SocketAction/send', send),
    takeEvery('SocketAction/sendMessage', sendMessage)
];



/**
 * Socketの受信受け口
 * @param val 
 * @returns 
 */
export function* hub(
    val: Partial<{
        data: {
            data: {
                [key: string]: string | number | object
            }
            task: string
        }
    }>
) {
    if (val.data === undefined
        || val.data.data === undefined
        && val.data.task === undefined
    ) {
        console.error(val)
        yield errorJob(val)
        return
    }

    // タスクによって処理を分岐
    console.log(val.data)
    
    switch (val.data.task) {
        case 'debug':
            yield setResult(val.data)
            break
        case 'embed':
            yield setResult(ParseHelper.call().parse(val.data.data, val.data.task))
            break
        case 'vector':
            yield setResult(val.data.data)
            break
        default:
            console.error(val)
            yield errorJob(val)
            break
    }

    yield put({
        type    : 'JobStack/reset'
    })
}

function* setResult(data: object) {
    const job:JobStackInterface = yield select(JobStack)
    console.log(job)
    yield put({
        type                : job.jobs[0].dispatch,
        [job.jobs[0].task]  : data,
        ...job.jobs[0].options
    })
}

/**
 * データを送信
 * @param val 
 * @returns
 */
function* sendMessage(
    val: {
        message: File
    }
) {
    yield SocketHelper.call()
            .send(
                yield SocketHelper.call().fileToBase64(val.message)
            )
}

function* send(val: any): any {
    //console.log(JSON.stringify(val.message))
    yield SocketHelper.call().send(val.message)
}

/**
 * エラー発生時の処理
 * @param val 
 */
function* errorJob(val: any): any {
    yield put({
        type    : 'JobStack/reset'
    })

    yield loadingHide()
    
    // トースターアニメーションで失敗を通知
    yield put({
        type        : 'toasterAnimation/setShow',
        show        : true,
        text        : '失敗しました',
        mode        : 'error',
    })
}

function* connectionSocket(val: any): any {
    if (SocketHelper.call().isConnected() === false) {

    }
}