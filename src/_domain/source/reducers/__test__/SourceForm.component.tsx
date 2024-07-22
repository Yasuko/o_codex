import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    SourceFormPropsInterface,
    SourceFormInterface,
    initialState
} from '../SourceForm'

// import component

export const SourceFormComponent = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((state: SourceFormPropsInterface): SourceFormInterface => {
                    return (state.SourceForm === undefined) ? initialState : state.SourceForm
                })

    return (
        <div className='w-svw absolute bottom-4'>
            <input
                type='text'
                id='set-index'
                value=''
                onChange={(e) => dispatch({
                    type: 'SourceForm/setIndex',
                    payload: e.target.value
                })}
            />
            <input
                type='text'
                id='set-title'
                value=''
                onChange={(e) => dispatch({
                    type: 'SourceForm/setTitle',
                    payload: e.target.value
                })}
            />
            <input
                type='text'
                id='set-text'
                value=''
                onChange={(e) => dispatch({
                    type: 'SourceForm/setText',
                    payload: e.target.value
                })}
            />
            <input
                type='text'
                id='set-url'
                value=''
                onChange={(e) => dispatch({
                    type: 'SourceForm/setURL',
                    payload: e.target.value
                })}
            />
            <button
                id='reset-button'
                onClick={() => dispatch({
                    type: 'SourceForm/reset'
                })}
            > Reset </button>
            <div id="title">{d.title}</div>
            <div id="text">{d.text}</div>
            <div id="url">{d.url}</div>
            <div id="index">{d.index}</div>
        </div>
    )
}


export default SourceFormComponent
