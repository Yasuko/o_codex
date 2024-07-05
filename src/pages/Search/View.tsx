import React from 'react'
// import reducer
import { useSelector } from 'react-redux'
import {
    SearchViewPropsInterface,
    SearchViewInterface,
    initialState
} from '../../_domain/search/reducers/SearchView'
// import component

export const View = (): JSX.Element => {

    const s = useSelector((state: SearchViewPropsInterface): SearchViewInterface => {
        return (state.SearchView === undefined) ? initialState : state.SearchView
    })

    if (s.title === '') return (<></>)

    return (
        <div className='
                w-3/4
                absolute top-0 left-20 mt-2 ms-28'>
                <div className="flex flex-wrap m-3 mb-1">
                    <div className="
                        w-full px-3 mb-2
                        grid grid-cols-4 gap-2
                        bg-gray-300 rounded
                    ">
                        <label
                            className="
                                block uppercase tracking-wide
                                text-gray-400 text-xs font-bold leading-7
                                mb-2">
                            TITLE：
                        </label>
                        <pre
                            className="
                                py-2 px-3 pe-11 block
                                w-full border-gray-200 shadow-sm rounded-lg
                                text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                disabled:opacity-50 disabled:pointer-events-none
                                dark:bg-white-900 dark:border-black dark:text-black
                                dark:focus:ring-gray-600"
                            >
                            { s.title }
                        </pre>
                        <label
                            className="
                                block uppercase tracking-wide
                                text-gray-400 text-xs font-bold leading-7"
                            htmlFor="grid-password">
                            SCORE：
                        </label>
                        <pre
                            className="
                                py-2 px-3 pe-11 block
                                w-full border-gray-200 shadow-sm rounded-lg
                                text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                disabled:opacity-50 disabled:pointer-events-none
                                dark:bg-white-900 dark:border-black dark:text-black
                                dark:focus:ring-gray-600"
                            >
                            { s.score }
                        </pre>
                    </div>
                    <div className="
                        w-full px-3 mb-2
                        bg-gray-300 rounded
                    ">
                        <label
                            className="
                                block uppercase tracking-wide
                                text-gray-400 text-xs font-bold
                                mb-2"
                            htmlFor="grid-password">
                            URL
                        </label>
                        <pre
                            className="
                                py-2 px-3 pe-11 block
                                w-full border-gray-200 shadow-sm rounded-lg
                                text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                disabled:opacity-50 disabled:pointer-events-none
                                dark:bg-white-900 dark:border-black dark:text-black
                                dark:focus:ring-gray-600"
                            >
                            { s.url }
                        </pre>
                    </div>
                    <div className="
                        w-full px-3 mb-2
                        bg-gray-300 rounded
                    ">
                        <label
                            className="
                                block uppercase tracking-wide
                                text-gray-400 text-xs font-bold
                                mb-2"
                            htmlFor="grid-password">
                            DOCUMENT
                        </label>
                        <pre
                            className="
                                py-2 px-3 pe-11 block
                                w-full h-[500px] overflow-y-auto overflow-x-hidden
                                border-gray-200 shadow-sm rounded-lg
                                text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                disabled:opacity-50 disabled:pointer-events-none
                                dark:bg-white-900 dark:border-black dark:text-black
                                dark:focus:ring-gray-600"
                            >
                            { s.document }
                        </pre>
                    </div>
                    <div className="
                        w-full px-3
                        bg-gray-300 rounded
                    ">
                        <label
                            className="
                                block uppercase tracking-wide
                                text-gray-400 text-xs font-bold
                                mb-2"
                            htmlFor="grid-password">
                            CHUNK
                        </label>
                        <pre
                            className="
                                py-2 px-3 pe-11 block
                                w-full border-gray-200 shadow-sm rounded-lg
                                text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                disabled:opacity-50 disabled:pointer-events-none
                                dark:bg-white-900 dark:border-black dark:text-black
                                dark:focus:ring-gray-600"
                            >
                            { s.chunk }
                        </pre>
                    </div>
                </div>
        </div>
    )
}

export default View
