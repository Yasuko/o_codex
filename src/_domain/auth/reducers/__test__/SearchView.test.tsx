import { describe, it, expect } from 'vitest'
import reducer, { initialState, slice } from '../SearchView' // 適切なパスに置き換えてください
import { SearchViewOptionType } from '../__type.search' // 適切なパスに置き換えてください

const testInitialState: SearchViewOptionType = {
    title: 'title',
    url: 'http://example.com',
    score: 0.5,
    chunk: 'chunk',
    document: 'document'
}

describe('SearchViewスライス', () => {
    it('setアクションが正しく状態を更新することを確認する', () => {
        const previousState: SearchViewOptionType = testInitialState
        const newState = reducer(previousState, slice.actions.set({ title: 'test1', document: 'test2' }))
        expect(newState.title).toBe('test1')
        expect(newState.document).toBe('test2')
    })

    it('resetアクションが状態を初期状態にリセットすることを確認する', () => {
        const previousState: SearchViewOptionType = testInitialState
        const newState = reducer(previousState, slice.actions.reset())
        expect(newState).toEqual(initialState)
    })
})