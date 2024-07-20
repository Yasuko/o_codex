import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    DocumentEmbedListPropsInterface,
    DocumentEmbedListInterface,
    initialState
} from '../DocumentEmbedList'

// import component

export const DocumentEmbedListComponent = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((state: DocumentEmbedListPropsInterface): DocumentEmbedListInterface => {
                    return (state.DocumentEmbedList === undefined) ? initialState : state.DocumentEmbedList
                })

    return (
        <div className='w-svw absolute bottom-4'>
            <input
                type='text'
                id='page-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedList/setPage',
                    payload: e.target.value
                })}
            />
            <input
                type='text'
                id='max-list-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedList/setEmbedding',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <input
                type='text'
                id='embed-add-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedList/add',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <input
                type='text'
                id='embed-update-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedList/update',
                    payload: {
                        ...JSON.parse(e.target.value),
                        index: 0
                    }
                })}
            />
            <input
                type='text'
                id='embed-remove-input'
                value=''
                onChange={() => dispatch({
                    type: 'DocumentEmbedList/remove',
                    payload: {
                        index: 0
                    }
                })}
            />
            <button
                id='reset-button'
                onClick={() => dispatch({
                    type: 'DocumentEmbedList/reset'
                })}
            > Reset </button>
            <div id="page">{d.page}</div>
            <div id="max_list">{d.max_list}</div>
            <div id="embeds">{JSON.stringify(d.embeds)}</div>
        </div>
    )
}


export default DocumentEmbedListComponent
