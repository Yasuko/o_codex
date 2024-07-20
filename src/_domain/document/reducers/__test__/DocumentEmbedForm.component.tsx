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
                    type: 'DocumentEmbedForm/setDocument',
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
                    payload: e.target.value
                })}
            />
            <input
                type='text'
                id='index-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedForm/setIndex',
                    payload: e.target.value
                })}
            />
            <div id="document">{d.document[0]}</div>
            <div id="embedding">{dataChecker(d.embedding)}</div>
            <div id="embedding_n">{dataChecker(d.embedding_n)}</div>
            <div id="key-view">{d.key}</div>
            <div id="index-view">{d.index}</div>
        </div>
    )
}

const dataChecker = (data: number[] | number[][][]): string | number => {
    return (data[0] instanceof Array) ? data[0][0][0] : data[0]
}

export default DocumentEmbedFormComponent
