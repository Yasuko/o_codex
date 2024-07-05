import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    SearchFormPropsInterface,
    SearchFormInterface,
    initialState
} from '../../_domain/search/reducers/SearchForm'

// import component

export const Form = (): JSX.Element => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'DocumentAction/load',
            payload: ''
        })
    },[])

    const d = useSelector((state: SearchFormPropsInterface): SearchFormInterface => {
                    return (state.SearchForm === undefined) ? initialState : state.SearchForm
                })

    if (d === undefined) return (<></>)

    return (
        <div className='
                w-3/4
                absolute bottom-4 m-28'>
                <div className="flex flex-wrap m-3 mb-1">
                    <div className="w-full px-3">
                        <label
                            className="
                                block uppercase tracking-wide
                                text-white-700 text-xs font-bold
                                mb-2"
                            htmlFor="grid-password">
                            Prompt
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
                            defaultValue={d.word}
                            onChange={(e) => {
                                dispatch({
                                    type: 'SearchForm/setWord',
                                    payload: e.target.value
                                })
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    dispatch({
                                        type: 'SearchAction/search',
                                    })
                                }
                            }} />
                    </div>
                </div>
                <button
                    className='
                        bg-gray-500 hover:bg-gray-600 text-white
                        rounded px-4 py-1 m-4
                        absolute right-1'
                    onClick={() => {
                        dispatch({
                            type: 'SearchAction/search',
                        })
                    }}
                >
                    Search
                </button>
        </div>
    )
}

export default Form
