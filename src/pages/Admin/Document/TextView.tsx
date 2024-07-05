import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import reducer
import {
    DocumentTextFormPropsInterface,
    DocumentTextFormInterface,
    initialState
} from '../../../_domain/document/reducers/DocumentTextForm'
import { Dispatch } from '@reduxjs/toolkit'
import EmbedView from './EmbedView'

// import component

export const TextView = (): JSX.Element => {
    const dispatch = useDispatch()
    const d = useSelector((state: DocumentTextFormPropsInterface): DocumentTextFormInterface => {
        return (state.DocumentTextForm === undefined) ? initialState : state.DocumentTextForm
    })

    if (d === undefined) return (<></>)

    return (
        <div className='w-svw absolute top-4 left-0'>
            <div className="flex flex-wrap mb-1">
                <div className="w-4/5 px-3 mx-auto bg-gray-300 rounded">
                    <label
                        className="
                            block uppercase tracking-wide
                            text-black text-xs font-bold
                            mb-0 line"
                        htmlFor="grid-password">
                        Title
                    </label>
                    <pre
                        className="
                            py-0 px-3 ms-20 pe-11 block
                            w-full border-gray-200 shadow-sm rounded-lg
                            text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                            disabled:opacity-50 disabled:pointer-events-none
                            dark:bg-white-900 dark:border-black dark:text-black
                            dark:focus:ring-gray-600"
                        id="directory-description"
                        >
                        {d.title}
                    </pre>
                </div>

                <div className="w-4/5 px-3 mx-auto my-2 bg-gray-400 rounded">
                    <label
                        className="
                            block uppercase tracking-wide
                            text-black text-xs font-bold
                            mb-2"
                        htmlFor="grid-password">
                        URL
                    </label>
                    <pre
                        className="
                            py-0 px-3 ms-20 pe-11 block w-full
                            text-sm
                            disabled:opacity-50 disabled:pointer-events-none
                            dark:bg-white-900 dark:border-black dark:text-black
                            dark:focus:ring-gray-600"
                        id="directory-description">
                        {d.url}
                    </pre>
                </div>
                <div className="
                        w-4/5 h-[700px] grid grid-cols-3 gap-3
                        px-3 mx-auto bg-gray-300 rounded
                    ">
                    <div className="">
                        <label
                            className="
                                block uppercase tracking-wide
                                text-black text-xs font-bold
                                mb-2"
                            htmlFor="grid-password">
                            DOCUMENT
                        </label>
                        { documentList(d.document, d.key, dispatch) }
                    </div>
                    <div className="col-span-2">
                        <EmbedView />
                    </div>
                </div>
            </div>
        </div>
    )
}

const documentList = (
    document: string[],
    key: string,
    dispatch: Dispatch): JSX.Element => {

    const list = document.map((c, i) => {
        return (
            <li
                key={i}
                className="
                    inline-flex items-center gap-x-2 py-3
                    text-sm font-medium text-gray-800
                ">
                <div className="flex items-center justify-between w-full">
                    <span>
                        <a
                        href='#'
                        className=""
                        onClick={() => {
                            dispatch({
                                type: 'DocumentAction/setEmbed',
                                payload: {
                                    key: key,
                                    index: i
                                }
                            })
                        }}>
                            { c.substring(0, 20)}...
                        </a>
                    </span>
                    <span>{ i }</span>
                </div>
            </li>
        )
    })
    return (
        <ul className="
            max-w-xs flex flex-col
            divide-y divide-gray-200 dark:divide-neutral-700
            ">
            {list}
        </ul>
    )
}


export default TextView
