import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    DocumentScreenPropsInterface,
    DocumentScreenInterface,
    initialState
} from '../DocumentScreen'

// import component

export const DocumentScreenComponent = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((
            state: DocumentScreenPropsInterface
        ): DocumentScreenInterface => {
            return (state.DocumentScreen === undefined) ? initialState : state.DocumentScreen
        })

    return (
        <div className='w-svw absolute bottom-4'>
            <button
                id='change-home'
                onClick={() => dispatch({
                    type: 'DocumentScreen/home',
                })}
            > Home </button>
            <button
                id='change-new'
                onClick={() => dispatch({
                    type: 'DocumentScreen/new',
                })}
            />
            <button
                id='change-text_edit'
                onClick={() => dispatch({
                    type: 'DocumentScreen/textEdit',
                })}
            />
            <button
                id='change-text_remove'
                onClick={() => dispatch({
                    type: 'DocumentScreen/textRemove',
                })}
            />
            <button
                id='change-embed_edit'
                onClick={() => dispatch({
                    type: 'DocumentScreen/embedEdit',
                })}
            />
            <button
                id='change-embed_view'
                onClick={() => dispatch({
                    type: 'DocumentScreen/embedView',
                })}
            />
            <button
                id='change-embed_remove'
                onClick={() => dispatch({
                    type: 'DocumentScreen/embedRemove',
                })}
            > Embed Remove </button>
            <button
                id='change-import'
                onClick={() => dispatch({
                    type: 'DocumentScreen/import',
                })}
                > import </button>
            <button
                id='reset-button'
                onClick={() => dispatch({
                    type: 'DocumentScreen/reset'
                })}
            > Reset </button>
            <div id="home">{String(d.home)}</div>
            <div id="new">{String(d.new)}</div>
            <div id="text_edit">{String(d.text_edit)}</div>
            <div id="text_remove">{String(d.text_remove)}</div>
            <div id="embed_edit">{String(d.embed_edit)}</div>
            <div id="embed_view">{String(d.embed_view)}</div>
            <div id="embed_remove">{String(d.embed_remove)}</div>
            <div id="import">{String(d.import)}</div>
        </div>
    )
}

export default DocumentScreenComponent
