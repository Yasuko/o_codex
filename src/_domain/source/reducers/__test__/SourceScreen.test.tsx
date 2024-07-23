import { describe, it, expect } from 'vitest'
import reducer, { initialState, slice } from '../SourceScreen' // 適切なパスに置き換えてください
import { SourceScreenType } from '../__type.source' // 適切なパスに置き換えてください


describe('SourceScreenスライス', () => {
    it('homeアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceScreenType = initialState
        const newState = reducer(previousState, slice.actions.home())
        expect(newState.home).toBe(false)
    })

    it('newアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceScreenType = initialState
        const newState = reducer(previousState, slice.actions.new())
        expect(newState.home).toBe(false)
        expect(newState.new).toBe(true)
    })

    it('editアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceScreenType = initialState
        const newState = reducer(previousState, slice.actions.edit())
        expect(newState.home).toBe(false)
        expect(newState.edit).toBe(true)
    })

    it('viewアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceScreenType = initialState
        const newState = reducer(previousState, slice.actions.view())
        expect(newState.home).toBe(false)
        expect(newState.view).toBe(true)
    })

    it('removeアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceScreenType = initialState
        const newState = reducer(previousState, slice.actions.remove())
        expect(newState.home).toBe(false)
        expect(newState.remove).toBe(true)
    })

    it('importアクションが正しく状態を更新することを確認する', () => {
        const previousState: SourceScreenType = initialState
        const newState = reducer(previousState, slice.actions.import())
        expect(newState.home).toBe(false)
        expect(newState.import).toBe(true)
    })

    it('resetアクションが状態を初期状態にリセットすることを確認する', () => {
        const previousState: SourceScreenType = initialState
        const newState = reducer(previousState, slice.actions.reset())
        expect(newState).toEqual(initialState)
    })
})