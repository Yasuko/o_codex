import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import reducer
import {
    DocumentEmbedFormPropsInterface,
    DocumentEmbedFormInterface,
    initialState
} from '../../../_domain/document/reducers/DocumentEmbedForm'

// import component

export const Remove = (): JSX.Element => {
    const dispatch = useDispatch()
    const d = useSelector((state: DocumentEmbedFormPropsInterface): DocumentEmbedFormInterface => {
        return (state.DocumentEmbedForm === undefined) ? initialState : state.DocumentEmbedForm
    })

    if (d === undefined) return (<></>)

    return (
        <div className='w-svw absolute bottom-4'>
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
                    <pre
                        className="
                            py-2 px-3 pe-11 block
                            w-full border-gray-200 shadow-sm rounded-lg
                            text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                            disabled:opacity-50 disabled:pointer-events-none
                            dark:bg-white-900 dark:border-black dark:text-black
                            dark:focus:ring-gray-600"
                        id="directory-description"
                        >
                        { JSON.stringify(d.document) }
                    </pre>
                </div>
                <div className="w-full px-3">
                    <label
                        className="
                            block uppercase tracking-wide
                            text-white-700 text-xs font-bold
                            mb-2"
                        htmlFor="grid-password">
                        EMBEDDING
                    </label>
                    <pre
                        className="
                            py-2 px-3 pe-11 block
                            w-full border-gray-200 shadow-sm rounded-lg
                            text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                            disabled:opacity-50 disabled:pointer-events-none
                            dark:bg-white-900 dark:border-black dark:text-black
                            dark:focus:ring-gray-600"
                        id="directory-description"
                        >
                        { JSON.stringify(d.embedding) }
                    </pre>
                </div>
                <div className="w-full px-3">
                    <label
                        className="
                            block uppercase tracking-wide
                            text-white-700 text-xs font-bold
                            mb-2"
                        htmlFor="grid-password">
                        EMBEDDING_N
                    </label>
                    <pre
                        className="
                            py-2 px-3 pe-11 block
                            w-full border-gray-200 shadow-sm rounded-lg
                            text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                            disabled:opacity-50 disabled:pointer-events-none
                            dark:bg-white-900 dark:border-black dark:text-black
                            dark:focus:ring-gray-600"
                        id="directory-description">
                        { JSON.stringify(d.embedding_n) }
                    </pre>
                </div>
                <button
                    className='
                        bg-gray-500 hover:bg-gray-600 text-white
                        rounded px-4 py-1 m-4
                        absolute right-28'
                    onClick={() => {
                        dispatch({
                            type: 'DocumentAction/removeEmbed',
                        })
                    }}
                >
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default Remove
