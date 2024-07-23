import { describe, it, expect } from 'vitest'
import reducer, { initialState, slice } from '../DocumentTextForm' // 適切なパスに置き換えてください



describe('DocumentTextFormスライス', () => {
    it('setアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState }
        const payload = { title: '新しいタイトル', index: 1 }
        const newState = reducer(previousState, slice.actions.set(payload))
        expect(newState.title).toBe('新しいタイトル')
        expect(newState.index).toBe(1)
    })

    it('setUrlアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState }
        const newState = reducer(previousState, slice.actions.setUrl('https://example.com'))
        expect(newState.url).toBe('https://example.com')
    })

    it('setTitleアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState }
        const newState = reducer(previousState, slice.actions.setTitle('新しいタイトル'))
        expect(newState.title).toBe('新しいタイトル')
    })

    it('setLoadingアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState }
        const newState = reducer(previousState, slice.actions.setLoading(true))
        expect(newState.loading).toBe(true)
    })

    it('setDocumentアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState }
        const newState = reducer(previousState, slice.actions.setDocument(['ドキュメント1', 'ドキュメント2']))
        expect(newState.document).toEqual(['ドキュメント1', 'ドキュメント2'])
    })

    it('setIndexアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState }
        const newState = reducer(previousState, slice.actions.setIndex(2))
        expect(newState.index).toBe(2)
    })

    it('resetアクションが状態を初期状態にリセットすることを確認する', () => {
        const previousState = { ...initialState, title: '変更されたタイトル', index: 1 }
        const newState = reducer(previousState, slice.actions.reset())
        expect(newState).toEqual(initialState)
    })
})