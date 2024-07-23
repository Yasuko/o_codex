import { describe, it, expect } from 'vitest'
import reducer, { initialState, slice } from '../DocumentTextList' // 適切なパスに置き換えてください
import { DocumentTextListType, DocumentTextOptionType } from '../__type.document'

/**
 * テスト用のデータ
 */
const testTextsOption: DocumentTextOptionType = {
    title: 'タイトル',
    url: 'https://example.com',
    loading: false,
    document: [],
    embedding: false,
    key: 'key',
    chunk: []
}
/**
 * テスト用の更新データ
 */
const testTextsOptionUpdated: DocumentTextOptionType = {
    title: '更新タイトル',
    url: 'https://new.com',
    loading: true,
    document: ['doc1'],
    embedding: false,
    key: 'old-key',
    chunk: [['chunk1']]
}

/**
 * テスト用のリストデータ
 */
const testTextsList: DocumentTextListType = {
    texts: [testTextsOption],
    page: 0,
    max_list: 10
}

describe('DocumentTextListスライス', () => {
    it('setアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState }
        const payload = testTextsList
        const newState = reducer(previousState, slice.actions.set(payload))
        expect(newState).toEqual(payload)
    })

    it('addアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState }
        const payload = testTextsOption
        const newState = reducer(previousState, slice.actions.add(payload))
        expect(newState.texts).toContainEqual(payload)
    })

    it('updateアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState, texts: [testTextsOption] }
        const payload = testTextsOptionUpdated
        const newState = reducer(previousState, slice.actions.update({...payload, index: 0}))
        expect(newState.texts[0]).toEqual(payload)
    })

    it('removeアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState, texts: [testTextsOption] }
        const newState = reducer(previousState, slice.actions.remove(0))
        expect(newState.texts).toHaveLength(0)
    })

    it('setPageアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState }
        const newState = reducer(previousState, slice.actions.setPage(2))
        expect(newState.page).toBe(2)
    })

    it('setMaxListアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState }
        const newState = reducer(previousState, slice.actions.setMaxList(10))
        expect(newState.max_list).toBe(10)
    })

    it('resetアクションが状態を初期状態にリセットすることを確認する', () => {
        const previousState = { ...initialState, texts: [testTextsOption] }
        const newState = reducer(previousState, slice.actions.reset())
        expect(newState).toEqual(initialState)
    })
})