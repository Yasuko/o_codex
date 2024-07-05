import React from 'react'
import { useSelector } from 'react-redux'

// import reducer
import {
    DocumentEmbedViewPropsInterface,
    DocumentEmbedViewInterface,
    initialState
} from '../../../_domain/document/reducers/DocumentEmbedView'

// import component

export const EmbedView = (): JSX.Element => {

    const d = useSelector((state: DocumentEmbedViewPropsInterface): DocumentEmbedViewInterface => {
        return (state.DocumentEmbedView === undefined) ? initialState : state.DocumentEmbedView
    })

    if (d === undefined) return (<></>)

    return (
        <div className='absolute'>
            <div className="flex flex-wrap mx-3 mb-1">
                <div className="w-3/4 px-3">
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
                            w-auto h-[200px] border-gray-200 shadow-sm rounded-lg
                            overflow-y-auto overflow-x-hidden
                            text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                            disabled:opacity-50 disabled:pointer-events-none
                            dark:bg-white-900 dark:border-black dark:text-black
                            dark:focus:ring-gray-600"
                        id="directory-description"
                        >
                        { d.document }
                    </pre>
                </div>
                <div className="w-3/4 px-3">
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
                            w-auto h-[200px] border-gray-200 shadow-sm rounded-lg
                            overflow-y-auto overflow-x-hidden
                            text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                            disabled:opacity-50 disabled:pointer-events-none
                            dark:bg-white-900 dark:border-black dark:text-black
                            dark:focus:ring-gray-600"
                        id="directory-description"
                        >
                        { grid(d.embedding[0]) }
                    </pre>
                </div>
                <div className="w-3/4 px-3">
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
                            w-auto h-[200px] border-gray-200 shadow-sm rounded-lg
                            overflow-y-auto overflow-x-hidden
                            text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                            disabled:opacity-50 disabled:pointer-events-none
                            dark:bg-white-900 dark:border-black dark:text-black
                            dark:focus:ring-gray-600"
                        id="directory-description">
                        { grid(d.embedding_n[0]) }
                    </pre>
                </div>
            </div>
        </div>
    )
}

const grid = (d: number[]): JSX.Element => {
    
    if (d === undefined) return (<></>)

    const g: JSX.Element[] = []
    for (let i = 0; i < d.length; i++) {
        g.push(<div key={i} className='text-center'>{ d[i] }</div>)
    }
    
    return (
        <div className='w-[500px] grid grid-cols-5'>
            { g }
        </div>
    )
}


export default EmbedView
