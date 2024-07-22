import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    DocumentTextFormPropsInterface,
    DocumentTextFormInterface,
    initialState
} from '../DocumentTextForm'

// import component

export const DocumentTextFormComponent = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((state: DocumentTextFormPropsInterface): DocumentTextFormInterface => {
                    return (state.DocumentTextForm === undefined) ? initialState : state.DocumentTextForm
                })

    return (
        <div className='w-svw absolute bottom-4'>
            <input
                type='text'
                id='set-url'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentTextForm/setUrl',
                    payload: e.target.value
                })}
            />
            <input
                type='text'
                id='set-title'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentTextForm/setTitle',
                    payload: e.target.value
                })}
            />
            <input
                type='text'
                id='set-loading'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentTextForm/setLoading',
                    payload: e.target.value
                })}
            />
            <input
                type='text'
                id='set-document'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentTextForm/setDocument',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <input
                type='text'
                id='set-index'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentTextForm/setIndex',
                    payload: e.target.value
                })}
            />
            <input
                type='button'
                id='reset-button'
                value='reset'
                onClick={() => dispatch({
                    type: 'DocumentTextForm/reset'
                })}
            />
            <div id="url">{ d.url }</div>
            <div id="title">{ d.title }</div>
            <div id="loading">{ String(d.loading) }</div>
            <div id="document">{ d.document[0] }</div>
            <div id="index">{ d.index }</div>
        </div>
    )
}

export default DocumentTextFormComponent
