import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    SourceScreenPropsInterface,
    SourceScreenInterface,
    initialState
} from '../SourceScreen'

// import component

export const SourceScreenComponent = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((
            state: SourceScreenPropsInterface
        ): SourceScreenInterface => {
            return (state.SourceScreen === undefined) ? initialState : state.SourceScreen
        })

    return (
        <div className='w-svw absolute bottom-4'>
            <button
                id='change-home'
                onClick={() => dispatch({
                    type: 'SourceScreen/home',
                })}
            > Home </button>
            <button
                id='change-new'
                onClick={() => dispatch({
                    type: 'SourceScreen/new',
                })}
            />
            <button
                id='change-edit'
                onClick={() => dispatch({
                    type: 'SourceScreen/edit',
                })}
            />
            <button
                id='change-view'
                onClick={() => dispatch({
                    type: 'SourceScreen/view',
                })}
            />
            <button
                id='change-remove'
                onClick={() => dispatch({
                    type: 'SourceScreen/remove',
                })}
            />
            <button
                id='change-import'
                onClick={() => dispatch({
                    type: 'SourceScreen/import',
                })}
            />
            <button
                id='reset-button'
                onClick={() => dispatch({
                    type: 'SourceScreen/reset'
                })}
            > Reset </button>
            <div id="home">{String(d.home)}</div>
            <div id="new">{String(d.new)}</div>
            <div id="edit">{String(d.edit)}</div>
            <div id="remove">{String(d.remove)}</div>
            <div id="view">{String(d.view)}</div>
            <div id="import">{String(d.import)}</div>
        </div>
    )
}

export default SourceScreenComponent
