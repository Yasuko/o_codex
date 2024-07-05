import { Dispatch } from '@reduxjs/toolkit'
import * as React from 'react'
import { useDispatch } from "react-redux"

type PageControllerProps = {
    max_list: number
    elements: number
    page: number
    destination: string
    controller_max?: number
}

const PageController = (
    state: PageControllerProps
): JSX.Element => {

    const dispatch = useDispatch()
    const max_page = Math.floor(state.elements / state.max_list)

    return (
    <div
        className="
            px-6 py-4 grid gap-3
            md:flex md:justify-between md:items-center
            border-t border-gray-200 dark:border-gray-700">
        <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
                {max_page + 1}
            </span> results
            </p>
        </div>
        <nav className="flex items-center gap-x-1">
            <div className="flex items-center gap-x-1">
                { buildPageControl(state, dispatch) }
            </div>
        </nav>
        <div>
            <div className="inline-flex gap-x-2">
            <button
                type="button"
                className="
                    py-2 px-3 inline-flex items-center gap-x-2
                    text-sm font-medium
                    rounded-lg border border-gray-200
                    bg-white text-gray-800 shadow-sm
                    hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none
                    dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800
                    dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={() => {
                    const p = state.page - 1
                    dispatch({
                        type: state.destination,
                        payload: (p < 1) ? 0 : p
                    })
                }}>
                <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6"/>
                </svg>
                Prev
            </button>

            <button
                type="button"
                className="
                    py-2 px-3 inline-flex items-center gap-x-2
                    text-sm font-medium
                    rounded-lg border border-gray-200
                    bg-white
                    text-gray-800 shadow-sm
                    hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none
                    dark:bg-slate-900 dark:border-gray-700 dark:text-white
                    dark:hover:bg-gray-800 dark:focus:outline-none
                    dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={() => {
                    const p = state.page + 1
                    dispatch({
                        type: state.destination,
                        payload: (p >= max_page) ? max_page : p
                    })
                }}>
                Next
                <svg className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                </svg>
            </button>
            </div>
        </div>
    </div>
    )

}

const buildPageControl = (
    state: PageControllerProps,
    dispatch: Dispatch
) => {

    const _max = (state.controller_max === undefined) ? 5 : state.controller_max
    //const list: JSX.Element[] = []
    const b_list: JSX.Element[] = []
    const a_list: JSX.Element[] = []

    const style = `min-h-[38px] min-w-[38px] flex justify-center items-center
                text-gray-800 hover:bg-gray-100
                py-2 px-3 text-sm rounded-lg
                focus:outline-none focus:bg-gray-100
                disabled:opacity-50 disabled:pointer-events-none
                dark:hover:bg-white dark:focus:bg-white
                dark:hover:text-black`

    for (let i = 0; i < (state.elements / state.max_list); i++) {
        const _style = (i === state.page)
            ? `${style} bg-gray-100 dark:text-black`
            : `${style} dark:text-white `

        if (i < state.page) {
            b_list.push((
                <button
                    key={i}
                    type="button"
                    className={_style}
                    aria-current="page"
                    onClick={() => {
                        dispatch({
                            type: state.destination,
                            payload: i
                        })
                    }}>
                    {i + 1}
                </button>
            ))
            // controllerの最大幅を超えた分を消す
            if (b_list.length > _max) b_list.shift()
        } else {
            if (a_list.length < _max)
                a_list.push((
                    <button
                        key={i}
                        type="button"
                        className={_style}
                        aria-current="page"
                        onClick={() => {
                            dispatch({
                                type: state.destination,
                                payload: i
                            })
                        }}>
                        {i + 1}
                    </button>
                ))
        }
    }
    return (
        <>
            { b_list }
            { a_list }
        </>
    )
}

export default PageController