import { describe, it, expect } from 'vitest'
import reducer, { initialState, slice } from '../DocumentEmbedForm' // 適切なパスに置き換えてください
import { DocumentEmbedOptionType } from '../__type.document' // 適切なパスに置き換えてください


describe('DocumentEmbedFormスライス', () => {
    it('setアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const newOptions: Partial<DocumentEmbedOptionType> = { document: ['new document'], key: 'new key' }
        const newState = reducer(previousState, slice.actions.set(newOptions))
        expect(newState.document).toStrictEqual(['new document'])
        expect(newState.key).toBe('new key')
    })

    it('setDocumentアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const newState = reducer(previousState, slice.actions.setDocument(['new document']))
        expect(newState.document).toStrictEqual(['new document'])
    })

    it('setEmbeddingアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const newEmbedding = [[[1, 2, 3]]]
        const newState = reducer(previousState, slice.actions.setEmbedding(newEmbedding))
        expect(newState.embedding).toEqual(newEmbedding)
    })

    it('setEmbeddingNアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const newEmbeddingN = [[[4, 5, 6]]]
        const newState = reducer(previousState, slice.actions.setEmbeddingN(newEmbeddingN))
        expect(newState.embedding_n).toEqual(newEmbeddingN)
    })

    it('setKeyアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const newState = reducer(previousState, slice.actions.setKey('new key'))
        expect(newState.key).toBe('new key')
    })

    it('setIndexアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const newState = reducer(previousState, slice.actions.setIndex(1))
        expect(newState.index).toBe(1)
    })

    it('resetアクションが状態を初期状態にリセットすることを確認する', () => {
        const previousState = { ...initialState, document: ['changed'], key: 'changed', index: 1 }
        const newState = reducer(previousState, slice.actions.reset())
        expect(newState).toEqual(initialState)
    })
})