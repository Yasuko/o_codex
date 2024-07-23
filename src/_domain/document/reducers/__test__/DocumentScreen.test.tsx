import { describe, it, expect } from 'vitest'
import reducer, { initialState, slice } from '../DocumentScreen' // 適切なパスに置き換えてください

describe('DocumentScreenスライス', () => {
    it('homeアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState, home: false }
        const newState = reducer(previousState, slice.actions.home())
        expect(newState.home).toBe(true)
    })

    it('newアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState, new: false }
        const newState = reducer(previousState, slice.actions.new())
        expect(newState.new).toBe(true)
        expect(newState.home).toBe(false)
    })

    it('textEditアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState, text_edit: false }
        const newState = reducer(previousState, slice.actions.textEdit())
        expect(newState.text_edit).toBe(true)
        expect(newState.home).toBe(false)
    })

    it('textViewアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState, text_view: false }
        const newState = reducer(previousState, slice.actions.textView())
        expect(newState.text_view).toBe(true)
        expect(newState.home).toBe(false)
    })

    it('textRemoveアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState, text_remove: false }
        const newState = reducer(previousState, slice.actions.textRemove())
        expect(newState.text_remove).toBe(true)
        expect(newState.home).toBe(false)
    })

    it('embedEditアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState, embed_edit: false }
        const newState = reducer(previousState, slice.actions.embedEdit())
        expect(newState.embed_edit).toBe(true)
        expect(newState.home).toBe(false)
    })

    it('embedViewアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState, embed_view: false }
        const newState = reducer(previousState, slice.actions.embedView())
        expect(newState.embed_view).toBe(true)
        expect(newState.home).toBe(false)
    })

    it('embedRemoveアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState, embed_remove: false }
        const newState = reducer(previousState, slice.actions.embedRemove())
        expect(newState.embed_remove).toBe(true)
        expect(newState.home).toBe(false)
    })

    it('importアクションが正しく状態を更新することを確認する', () => {
        const previousState = { ...initialState, import: false }
        const newState = reducer(previousState, slice.actions.import())
        expect(newState.import).toBe(true)
        expect(newState.home).toBe(false)
    })

    it('resetアクションが状態を初期状態にリセットすることを確認する', () => {
        const previousState = { ...initialState, home: true, new: true }
        const newState = reducer(previousState, slice.actions.reset())
        expect(newState).toEqual(initialState)
    })
})