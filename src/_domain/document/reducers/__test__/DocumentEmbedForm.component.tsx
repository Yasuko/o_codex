import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    DocumentEmbedFormPropsInterface,
    DocumentEmbedFormInterface,
    initialState
} from '../DocumentEmbedForm'

// import component

export const DocumentEmbedFormComponent = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((state: DocumentEmbedFormPropsInterface): DocumentEmbedFormInterface => {
                    return (state.DocumentEmbedForm === undefined) ? initialState : state.DocumentEmbedForm
                })

    return (
        <div className='w-svw absolute bottom-4'>
            <input
                type='text'
                id='document-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedForm/setDoument',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <input
                type='text'
                id='embedding-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedForm/setEmbedding',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <input
                type='text'
                id='embedding_n-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedForm/setEmbeddingN',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <input
                type='text'
                id='key-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedForm/setKey',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <input
                type='text'
                id='index-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedForm/setIndex',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <div id="document">{d.document[0]}</div>

        </div>
    )
}

export default DocumentEmbedFormComponent
