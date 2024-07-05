import { put, select, takeEvery } from 'redux-saga/effects'
import { loadingShow, loadingHide } from '../animation/animation'
import { PayloadAction } from '@reduxjs/toolkit'

// import model
import { StrageModel } from '../_model/strage.model'

// reducer
import {
    SearchFormPropsInterface,
} from './reducers/SearchForm'

import { textToEmbed, trunkEmbedding } from './helper/embed.helper'
import { ResultInterface } from './reducers/SearchResult'

const searchForm = (state: SearchFormPropsInterface) => state.SearchForm

// Root Saga登録配列
export const RootSearchAction = [
    takeEvery('SearchAction/search', search),
    takeEvery('SearchAction/result', result),
    takeEvery('SearchAction/checkToken', checkToken),
]

/**
 * 検索処理
 * @param val 
 */
export function* search() {
    yield loadingShow('Now 呼び出してるねん Now')

    const w = yield select(searchForm)
    const e = yield textToEmbed(w.word)
    const e_n = trunkEmbedding(e)

    yield loadingHide()

    yield put({
        type: 'DocumentAction/consistency',
        payload: {
            embed: e,
            embed_n: e_n
        }
    })

    yield put({
        type: 'SearchForm/reset'
    })
}

function* result(
    val: PayloadAction<{
        result: ResultInterface[]
    }>
) {

    yield put({
        type: 'SearchResult/set',
        payload: val.payload
    })

}

function* checkToken() {
    const token = yield StrageModel.call().getAPI()

    if (token === '' || token === false) {
        yield put({ type: 'SearchScreen/token' })
    }
}