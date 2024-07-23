import { describe, it, expect } from 'vitest'
import reducer, { initialState, slice } from '../DocumentEmbedView' // 適切なパスに置き換えてください
import { DocumentViewOptionType } from '../__type.document' // 適切なパスに置き換えてください

const testDocumentViewOption: DocumentViewOptionType = {
    document: 'doc1',
    embedding: [[1, 2, 3]],
    embedding_n: [[1, 2, 3]],
}

describe('DocumentEmbedViewスライス', () => {
    it('setアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const newOptions: Partial<DocumentViewOptionType> = { document: 'new document' }
        const newState = reducer(previousState, slice.actions.set(newOptions))
        expect(newState.document).toBe('new document')
    })

    it('setDocumentアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const newState = reducer(previousState, slice.actions.setDocument('new document'))
        expect(newState.document).toBe('new document')
    })

    it('setEmbeddingアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const newEmbedding = [[1, 2, 3]]
        const newState = reducer(previousState, slice.actions.setEmbedding(newEmbedding))
        expect(newState.embedding).toEqual(newEmbedding)
    })

    it('setEmbeddingNアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const newEmbeddingN = [[4, 5, 6]]
        const newState = reducer(previousState, slice.actions.setEmbeddingN(newEmbeddingN))
        expect(newState.embedding_n).toEqual(newEmbeddingN)
    })

    it('resetアクションが状態を初期状態にリセットすることを確認する', () => {
        const previousState = testDocumentViewOption
        const newState = reducer(previousState, slice.actions.reset())
        expect(newState).toEqual(initialState)
    })
})