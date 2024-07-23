import { describe, it, expect } from 'vitest'
import reducer, { initialState, slice } from '../SourceList' // 適切なパスに置き換えてください
import { SourceType, SourceOptionType } from '../__type.source' // 適切なパスに置き換えてください

const testSourceOption: SourceOptionType = {
    title: 'Title1',
    text: 'Text1',
    url: 'URL1'
}

const testSourceOption2: SourceOptionType = {
    title: 'Title2',
    text: 'Text2',
    url: 'URL2'
}

const testSource: SourceType = {
    sources: [testSourceOption],
    page: 1,
    max_list: 10
}

describe('SourceListスライス', () => {
    it('setアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceType = { sources: [], page: 1, max_list: 10 }
        const newSources: SourceType = { sources: [testSourceOption], page: 1, max_list: 10 }
        const newState = reducer(previousState, slice.actions.set(newSources))
        expect(newState.sources).toEqual(testSource)
    })

    it('addアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceType = { sources: [], page: 1, max_list: 10 }
        const newSource: SourceOptionType = testSourceOption
        const newState = reducer(previousState, slice.actions.add(newSource))
        expect(newState.sources).toHaveLength(1)
        expect(newState.sources[0]).toEqual(newSource)
    })

    it('updateアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceType = testSource
        const updatedSource: SourceOptionType & { index: number } = { ...testSourceOption2, index: 0 }
        const newState = reducer(previousState, slice.actions.update(updatedSource))
        expect(newState.sources[0]).toEqual(testSourceOption2)
    })

    it('removeアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceType = testSource
        const newState = reducer(previousState, slice.actions.remove(0))
        expect(newState.sources).toHaveLength(0)
    })

    it('pageアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceType = { sources: [], page: 1, max_list: 10 }
        const newState = reducer(previousState, slice.actions.page(2))
        expect(newState.page).toBe(2)
    })

    it('maxListアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceType = { sources: [], page: 1, max_list: 10 }
        const newState = reducer(previousState, slice.actions.maxList(20))
        expect(newState.max_list).toBe(20)
    })

    it('resetアクションが状態を初期状態にリセットすることを確認する', () => {
        const previousState: SourceType = testSource
        const newState = reducer(previousState, slice.actions.reset())
        expect(newState).toEqual(initialState)
    })
})