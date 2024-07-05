import React from 'react'
import { useSelector } from 'react-redux'

// import reducer
import {
    SourceFormPropsInterface,
    SourceFormInterface,
    initialState
} from '../../../_domain/source/reducers/SourceForm'

// import component
export const View = (): JSX.Element => {
    const d = useSelector((state: SourceFormPropsInterface): SourceFormInterface => {
                return (state.SourceForm === undefined) ? initialState : state.SourceForm
            })

    return (
        <div className='w-svw absolute'>
            <div className="flex flex-wrap m-20">
                <div className="w-full px-3 mb-10">
                    <label
                        className="
                            block uppercase tracking-wide
                            text-white-700 text-xs font-bold
                            mb-2"
                        htmlFor="grid-password">
                        Title
                    </label>
                    <pre
                        className="
                            ms-10 block
                            w-full border-gray-200 shadow-sm rounded-lg
                            text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                            disabled:opacity-50 disabled:pointer-events-none
                            dark:bg-white-900 dark:border-black dark:text-white
                            dark:focus:ring-gray-600"
                        id="directory-description"
                    >
                        {d.title}
                    </pre>
                </div>
                <div className="w-full px-3 mb-10">
                    <label
                        className="
                            block uppercase tracking-wide
                            text-white-700 text-xs font-bold
                            "
                        htmlFor="grid-password">
                        Text
                    </label>
                    <pre
                        className="
                            ms-10 block
                            w-full border-gray-200 shadow-sm rounded-lg
                            text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                            disabled:opacity-50 disabled:pointer-events-none
                            dark:bg-white-900 dark:border-black dark:text-white
                            dark:focus:ring-gray-600"
                        >
                        {d.text}
                    </pre>
                </div>
                <div className="w-full px-3 mb-5">
                    <label
                        className="
                            block uppercase tracking-wide
                            text-white-700 text-xs font-bold
                            mb-2"
                        htmlFor="grid-password">
                        URL
                    </label>
                    <pre
                        className="
                            ms-10 block
                            w-full border-gray-200 shadow-sm rounded-lg
                            text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                            disabled:opacity-50 disabled:pointer-events-none
                            dark:bg-white-900 dark:border-black dark:text-white
                            dark:focus:ring-gray-600"
                    >
                        {d.url}
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default View
