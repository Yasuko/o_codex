import { describe, it, expect } from 'vitest'
import reducer, { initialState, slice } from '../SearchForm' // 適切なパスに置き換えてください
import { SearchType } from '../__type.search' // 適切なパスに置き換えてください

describe('SearchFormスライス', () => {
    it('setアクションが正しく状態を更新することを確認する', () => {
        const previousState: SearchType = { word: '', options: [] }
        const newState = reducer(previousState, slice.actions.set({ word: 'test' }))
        expect(newState.word).toBe('test')
        expect(newState.options).toEqual(previousState.options)
    })
    
    it('setWordアクションが正しく状態を更新することを確認する', () => {
        const previousState: SearchType = { word: '', options: [] }
        const newState = reducer(previousState, slice.actions.setWord('new word'))
        expect(newState.word).toBe('new word')
    })
    
    it('setOptionsアクションが正しく状態を更新することを確認する', () => {
        const previousState: SearchType = { word: '', options: [] }
        const newOptions = [{ key: 'value' }]
        const newState = reducer(previousState, slice.actions.setOptions(newOptions))
        expect(newState.options).toEqual(newOptions)
    })
    
    it('addOptionアクションが正しく状態を更新することを確認する', () => {
        const previousState: SearchType = { word: '', options: [] }
        const newOption = { key: 'value' }
        const newState = reducer(previousState, slice.actions.addOption(newOption))
        expect(newState.options).toContain(newOption)
    })
    
    it('updateOptionsアクションが正しく状態を更新することを確認する', () => {
        const previousState: SearchType = { word: '', options: [{ key: 'oldValue' }] }
        const updatedOption = { index: 0, key: 'key', value: 'newValue' }
        const newState = reducer(previousState, slice.actions.updateOptions(updatedOption))
        expect(newState.options[0]).toEqual({ key: 'newValue' })
    })
    
    it('resetアクションが状態を初期状態にリセットすることを確認する', () => {
        const previousState: SearchType = { word: 'test', options: [{ key: 'value' }] }
        const newState = reducer(previousState, slice.actions.reset())
        expect(newState).toEqual(initialState)
    })
})