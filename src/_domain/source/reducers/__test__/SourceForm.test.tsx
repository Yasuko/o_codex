import { describe, it, expect } from 'vitest'
import reducer, { initialState, slice } from '../SourceForm' // 適切なパスに置き換えてください
import { SourceFormType } from '../__type.source' // 適切なパスに置き換えてください

const testSourceForm: SourceFormType = {
    index: 1,
    title: 'Title1',
    text: 'Text1',
    url: 'http://example.com'
}

describe('SourceFormスライス', () => {
    it('setアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceFormType = initialState
        const newForm: SourceFormType = testSourceForm
        const newState = reducer(previousState, slice.actions.set(newForm))
        expect(newState).toEqual(newForm)
    })

    it('setIndexアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceFormType = initialState
        const newState = reducer(previousState, slice.actions.setIndex(1))
        expect(newState.index).toBe(1)
    })

    it('setTitleアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceFormType = initialState
        const newState = reducer(previousState, slice.actions.setTitle('New Title'))
        expect(newState.title).toBe('New Title')
    })

    it('setTextアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceFormType = initialState
        const newState = reducer(previousState, slice.actions.setText('New Text'))
        expect(newState.text).toBe('New Text')
    })

    it('setURLアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceFormType = initialState
        const newState = reducer(previousState, slice.actions.setURL('New URL'))
        expect(newState.url).toBe('New URL')
    })

    it('resetアクションが状態を初期状態にリセットすることを確認する', () => {
        const previousState: SourceFormType = testSourceForm
        const newState = reducer(previousState, slice.actions.reset())
        expect(newState).toEqual(initialState)
    })
})