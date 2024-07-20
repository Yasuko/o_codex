import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    DocumentEmbedViewPropsInterface,
    DocumentEmbedViewInterface,
    initialState
} from '../DocumentEmbedView'

// import component

export const DocumentEmbedViewComponent = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((state: DocumentEmbedViewPropsInterface): DocumentEmbedViewInterface => {
                    return (state.DocumentEmbedView === undefined) ? initialState : state.DocumentEmbedView
                })

    return (
        <div className='w-svw absolute bottom-4'>
            <input
                type='text'
                id='document-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedView/setDocument',
                    payload: e.target.value
                })}
            />
            <input
                type='text'
                id='embedding-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedView/setEmbedding',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <input
                type='text'
                id='embedding_n-input'
                value=''
                onChange={(e) => dispatch({
                    type: 'DocumentEmbedView/setEmbeddingN',
                    payload: JSON.parse(e.target.value)
                })}
            />
            <button
                id='reset-button'
                onClick={() => dispatch({
                    type: 'DocumentEmbedView/reset'
                })}
            > Reset </button>
            <div id="document">{d.document}</div>
            <div id="embedding">{dataChecker(d.embedding)}</div>
            <div id="embedding_n">{dataChecker(d.embedding_n)}</div>
        </div>
    )
}

const dataChecker = (data: number[] | number[][]): string | number => {
    return (data[0] instanceof Array) ? data[0][0] : data[0]
}

export default DocumentEmbedViewComponent
