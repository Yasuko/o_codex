import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    DocumentTextListPropsInterface,
    DocumentTextListInterface,
    initialState
} from '../DocumentTextList'

// import component

export const DocumentEmbedListComponent = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((
            state: DocumentTextListPropsInterface
        ): DocumentTextListInterface => {
            return (state.DocumentTextList === undefined) ? initialState : state.DocumentTextList
        })

    return (
        <div className='w-svw absolute bottom-4'>
            <input
                type='text'
                id='add-text'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentTextList/add',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <input
                type='text'
                id='update-text'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentTextList/update',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <input
                type='text'
                id='remove-text'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentTextList/remove',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <input
                type='text'
                id='set-page'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentTextList/setPage',
                    payload: e.target.value
                })}
            />
            <input
                type='text'
                id='set-max-list'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentTextList/setMaxList',
                    payload: e.target.value
                })}
            />
            <button
                id='reset-button'
                onClick={() => dispatch({
                    type: 'DocumentTextList/reset'
                })}
            > Reset </button>
            <div id="page">{d.page}</div>
            <div id="max_list">{d.max_list}</div>
            <div id="texts">{JSON.stringify(d.texts)}</div>
        </div>
    )
}

export default DocumentEmbedListComponent
