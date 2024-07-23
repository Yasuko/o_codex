import { describe, it, expect } from 'vitest'
import { configureStore } from '@reduxjs/toolkit'
import reducer, { initialState, slice } from '../SearchResult'
import { SearchResultType } from '../__type.search'

const testInitialState: SearchResultType = {
    results: [
        {
            score: 0.5,
            document: 'document1',
            chunk: 'chunk1',
            title: 'title1',
            url: 'http://example.com'
        }
    ],
    results_n: [
        {
            score: 0.5,
            document: 'document1',
            chunk: 'chunk1',
            title: 'title1',
            url: 'http://example.com'
        }
    ]
}

describe('SearchResult slice試験', () => {
    it('should return the initial state', () => {
        const store = configureStore({ reducer })
        expect(store.getState()).toEqual(initialState)
    })

    it('setアクション試験', () => {
        const store = configureStore({ reducer })
        const newSearchResult: SearchResultType = testInitialState
        store.dispatch(slice.actions.set(newSearchResult))
        expect(store.getState()).toEqual(newSearchResult)
    })

    it('resetアクション試験', () => {
        const store = configureStore({ reducer })
        const newSearchResult: SearchResultType = testInitialState
        store.dispatch(slice.actions.set(newSearchResult))
        store.dispatch(slice.actions.reset())
        expect(store.getState()).toEqual(initialState)
    })
})