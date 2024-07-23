import { describe, it, expect } from 'vitest'
import reducer, { initialState, slice } from '../SearchScreen' // 適切なパスに置き換えてください
import { SearchScreenType } from '../__type.search' // 適切なパスに置き換えてください

describe('SearchScreenスライス', () => {
  it('homeアクションが正しく状態を更新することを確認する', () => {
    const previousState: SearchScreenType = { home: false, result: false, token: false }
    const newState = reducer(previousState, slice.actions.home())
    expect(newState.home).toBe(true)
    expect(newState.result).toBe(false)
    expect(newState.token).toBe(false)
  })

  it('resultアクションが正しく状態を更新することを確認する', () => {
    const previousState: SearchScreenType = { home: true, result: false, token: false }
    const newState = reducer(previousState, slice.actions.result())
    expect(newState.home).toBe(false)
    expect(newState.result).toBe(true)
    expect(newState.token).toBe(false)
  })

  it('tokenアクションが正しく状態を更新することを確認する', () => {
    const previousState: SearchScreenType = { home: true, result: false, token: false }
    const newState = reducer(previousState, slice.actions.token())
    expect(newState.home).toBe(false)
    expect(newState.result).toBe(false)
    expect(newState.token).toBe(true)
  })

  it('resetアクションが状態を初期状態にリセットすることを確認する', () => {
    const previousState: SearchScreenType = { home: false, result: true, token: true }
    const newState = reducer(previousState, slice.actions.reset())
    expect(newState).toEqual(initialState)
  })
})