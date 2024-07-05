import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'

// import reducer
import {
    SourceListPropsInterface,
    SourceListInterface,
    initialState
} from '../../../_domain/source/reducers/SourceList'

// import component
import PageController from '../../_component/list_tools/page_controller'

export const List = (): JSX.Element => {
    const dispatch = useDispatch()
    const d = useSelector((state: SourceListPropsInterface): SourceListInterface => {
                return (state.SourceList === undefined) ? initialState : state.SourceList
            })

    const page: JSX.Element[] = buildList(d, dispatch)
    const num = d.sources.length

    return (
        <div className="w-svw py-10 sm:px-6 lg:px-8 lg:py-14">
            <button
                className='
                    w-16
                    bg-blue-400 hover:bg-blue-700
                    text-white
                    rounded m-2'
                onClick={() => {
                    dispatch({
                        type: 'SourceAction/save',
                    })
                }}>
                SAVE
            </button>
            <button
                className='
                    w-16
                    bg-green-400 hover:bg-green-700
                    text-white
                    rounded m-2'
                onClick={() => {
                    dispatch({
                        type: 'SourceAction/load',
                    })
                }}>
                LOAD
            </button>
            <button
                className='
                    w-16
                    bg-green-400 hover:bg-green-700
                    text-white
                    rounded m-2'
                onClick={() => {
                    dispatch({
                        type: 'SourceAction/exportSource',
                    })
                }}>
                EXPORT
            </button>
            <button
                className='
                    w-16
                    bg-green-400 hover:bg-green-700
                    text-white
                    rounded m-2'
                onClick={() => {
                    dispatch({
                        type: 'SourceScreen/import',
                    })
                }}>
                IMPORT
            </button>
            <div className="flex flex-col">
            <div className="-m-1.5 ">
                <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">

                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Source :{num}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                        all embeds
                        </p>
                    </div>

                    <div>
                    <div className="inline-flex gap-x-2 me-5">
                            <label htmlFor="hs-trailing-button-add-on-with-icon" className="sr-only">Label</label>
                            <div className="flex rounded-lg shadow-sm">
                                <input
                                    type="text"
                                    id="hs-trailing-button-add-on-with-icon"
                                    name="hs-trailing-button-add-on-with-icon"
                                    className="
                                        py-3 px-4 block w-full border-gray-200
                                        shadow-sm rounded-s-lg text-sm
                                        focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                        disabled:opacity-50 disabled:pointer-events-none
                                        dark:bg-slate-700 dark:border-gray-700
                                        dark:text-gray-400 dark:focus:ring-gray-600" />
                                <button
                                    type="button"
                                    className="w-[2.875rem] h-[2.875rem]
                                        flex-shrink-0 inline-flex justify-center items-center gap-x-2
                                        text-sm font-semibold rounded-e-md border border-transparent
                                        bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none
                                        dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <svg
                                        className="flex-shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"/>
                                            <path d="m21 21-4.3-4.3"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="inline-flex gap-x-2 me-5">
                            <a
                                className="
                                    py-2 px-3 inline-flex items-center gap-x-2
                                    text-sm font-semibold
                                    rounded-lg border border-transparent bg-blue-600
                                    text-white
                                    hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none
                                    dark:focus:outline-none dark:focus:ring-1
                                    dark:focus:ring-gray-600"
                                href="#"
                                onClick={() => {
                                    dispatch({type: 'SourceForm/reset'})
                                    dispatch({type: 'SourceScreen/new'})
                                }}>
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"/><path d="M12 5v14"/>
                                </svg>
                                Add
                            </a>
                        </div>
                    </div>
                    </div>

                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <tr>
                        <th scope="col" className="px-6 py-3 text-start border-s border-gray-200 dark:border-gray-700">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Text
                            </span>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">

                        </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        { page }
                    </tbody>
                    </table>

                    <PageController
                        max_list={d.max_list}
                        elements={num}
                        page={d.page}
                        destination='SourceList/page'
                        />

                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const buildList = (
    d: SourceListInterface,
    dispatch: Dispatch
): JSX.Element[] => {

    const p = d.page * d.max_list
    const list: JSX.Element[] = []

    for (let i = 0; i < d.max_list; i++) {
        const _i = i + p
        if (d.sources[_i] === undefined) break
        list.push((
            <tr key={i}>
                <td className="h-px w-auto max-w-[300px] whitespace-nowrap truncate">
                    <div className="px-6 py-2 flex items-center gap-x-3">
                        <span className="
                            w-[350px]
                            text-sm text-gray-600
                            dark:text-gray-400">
                            {d.sources[_i].title.substring(0, 30)} .......
                        </span>
                        <a
                            className="flex items-center gap-x-2"
                            href="#"
                            onClick={() => {
                                dispatch({
                                    type: 'SourceForm/set',
                                    payload: {
                                        title: d.sources[_i].title,
                                        text: d.sources[_i].text,
                                        url: d.sources[_i].url,
                                    }
                                })
                                dispatch({
                                    type: 'SourceScreen/view',
                                })
                        }}>
                            <span
                                className="
                                    text-sm text-blue-600 decoration-2
                                    hover:underline dark:text-blue-500">
                                { d.sources[_i].url.substring(0, 30) }
                            </span>
                        </a>
                    </div>
                </td>
                <td className="h-px w-auto min-w-[100px] whitespace-nowrap">
                    <div className="px-6 py-2">
                        <button
                            className='
                                bg-green-400 hover:bg-green-300
                                text-white
                                rounded mx-1 px-1 py-1'
                            onClick={() => {
                                console.log(_i)
                                dispatch({
                                    type: 'SourceForm/set',
                                    payload: {
                                        title: d.sources[_i].title,
                                        text: d.sources[_i].text,
                                        url: d.sources[_i].url,
                                        index: _i
                                    }
                                })
                                dispatch({
                                    type: 'SourceScreen/edit',
                                })
                            }}>
                            Edit
                        </button>
                        <button
                            className='
                                bg-red-400 hover:bg-red-300
                                text-white
                                rounded mx-1 px-1 py-1'
                            onClick={() => {
                                dispatch({
                                    type: 'SourceForm/set',
                                    payload: {
                                        title: d.sources[_i].title,
                                        text: d.sources[_i].text,
                                        url: d.sources[_i].url,
                                        index: _i
                                    }
                                })
                                dispatch({
                                    type: 'SourceScreen/remove',
                                })
                            }}>
                            delete
                        </button>
                    </div>
                </td>
            </tr>
        ))
    }
    return list
}

export default List
