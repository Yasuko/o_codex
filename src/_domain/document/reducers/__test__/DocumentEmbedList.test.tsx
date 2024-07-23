import { describe, it, expect } from 'vitest'
import reducer, { initialState, slice } from '../DocumentEmbedList' // 適切なパスに置き換えてください
import {
    DocumentEmbedListOptionInterface,
    DocumentEmbedListInterface
} from '../DocumentEmbedList' // 適切なパスに置き換えてください

const testEmbedsOption: DocumentEmbedListOptionInterface = {
    document: ['doc1'],
    embedding: [[[1,2,3]]],
    embedding_n: [[[1,2,3]]],
    key: 'key1'
}

const testEmbed: DocumentEmbedListInterface = {
    embeds: [testEmbedsOption],
    page: 1,
    max_list: 10
}

describe('DocumentEmbedListスライス', () => {
    it('setアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const newEmbeds: DocumentEmbedListInterface = { embeds: [testEmbedsOption], page: 1, max_list: 10 }
        const newState = reducer(previousState, slice.actions.set(newEmbeds))
        expect(newState.embeds).toEqual(newEmbeds.embeds)
    })

    it('addアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const newEmbed: DocumentEmbedListOptionInterface & { key: string } = testEmbedsOption
        const newState = reducer(previousState, slice.actions.add(newEmbed))
        expect(newState.embeds).toContainEqual(newEmbed)
    })

    it('updateアクションが正しく状態を更新することを確認する', () => {
        const previousState = initialState
        const updatedEmbed: DocumentEmbedListOptionInterface & { key: string, index: number } = { ...testEmbedsOption, index: 0 }
        const newState = reducer(previousState, slice.actions.update(updatedEmbed))
        expect(newState.embeds[0]).toEqual(testEmbedsOption)
    })

    it('removeアクションが正しく状態を更新することを確認する', () => {
        const previousState = testEmbed
        const newState = reducer(previousState, slice.actions.remove({ key: 'key1', index: 0 }))
        expect(newState.embeds).toHaveLength(0)
    })

    it('resetアクションが状態を初期状態にリセットすることを確認する', () => {
        const previousState = testEmbed
        const newState = reducer(previousState, slice.actions.reset())
        expect(newState).toEqual(initialState)
    })
})