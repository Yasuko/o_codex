import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    DocumentEmbedFormPropsInterface,
    DocumentEmbedFormInterface,
    initialState
} from '../../../_domain/document/reducers/DocumentEmbedForm'

// import component

export const Edit = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((state: DocumentEmbedFormPropsInterface): DocumentEmbedFormInterface => {
                    return (state.DocumentEmbedForm === undefined) ? initialState : state.DocumentEmbedForm
                })
    const _setForm = (val: string, target: string) => {
        dispatch({
            type: 'DocumentEmbedForm/' + target,
            payload: val
        })
    }

    if (d === undefined) return (<></>)

    return (
        <div className='w-svw absolute bottom-4'>
            <form className="m-20">
                <div className="flex flex-wrap mx-3 mb-1">
                    <div className="w-full px-3">
                        <label
                            className="
                                block uppercase tracking-wide
                                text-white-700 text-xs font-bold
                                mb-2"
                            htmlFor="grid-password">
                            DOCUMENT
                        </label>
                        <textarea
                            className="
                                py-2 px-3 pe-11 block
                                w-full border-gray-200 shadow-sm rounded-lg
                                text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                disabled:opacity-50 disabled:pointer-events-none
                                dark:bg-white-900 dark:border-black dark:text-black
                                dark:focus:ring-gray-600"
                            id="directory-description"
                            rows = {5}
                            placeholder=''
                            defaultValue={ JSON.stringify(d.document) }
                            onChange={(e) => _setForm(e.target.value, 'setDocument')} />
                    </div>
                    <div className="w-full px-3">
                        <label
                            className="
                                block uppercase tracking-wide
                                text-white-700 text-xs font-bold
                                mb-2"
                            htmlFor="grid-password">
                            Embedding
                        </label>
                        <input
                            type='text'
                            className="
                                py-2 px-3 pe-11 block
                                w-full border-gray-200 shadow-sm rounded-lg
                                text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                disabled:opacity-50 disabled:pointer-events-none
                                dark:bg-white-900 dark:border-black dark:text-black
                                dark:focus:ring-gray-600"
                            id="directory-description"
                            placeholder=''
                            defaultValue={JSON.stringify(d.embedding).substring(1, 50)}
                            onChange={(e) => _setForm(e.target.value, 'setEmbedding') } />
                    </div>
                    <div className="w-full px-3">
                        <label
                            className="
                                block uppercase tracking-wide
                                text-white-700 text-xs font-bold
                                mb-2"
                            htmlFor="grid-password">
                            EmbeddingN
                        </label>
                        <input
                            type='text'
                            className="
                                py-2 px-3 pe-11 block
                                w-full border-gray-200 shadow-sm rounded-lg
                                text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                disabled:opacity-50 disabled:pointer-events-none
                                dark:bg-white-900 dark:border-black dark:text-black
                                dark:focus:ring-gray-600"
                            id="directory-description"
                            placeholder=''
                            defaultValue={JSON.stringify(d.embedding_n).substring(1, 50)}
                            onChange={(e) => _setForm(e.target.value, 'setEmbeddingN') } />
                    </div>
                </div>
                <button
                    className='
                        bg-gray-500 hover:bg-gray-600 text-white
                        rounded px-4 py-1 m-4
                        absolute right-28'
                    onClick={() => {
                        dispatch({
                            type: 'DocumentAction/updateEmbed',
                        })
                    }}
                >
                    UPDATE
                </button>
            </form>
        </div>
    )
}

export default Edit
