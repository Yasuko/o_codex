import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import reducer
import {
    SearchResultPropsInterface,
    SearchResultInterface,
    ResultInterface,
    initialState
} from '../../_domain/search/reducers/SearchResult'
import { Dispatch } from '@reduxjs/toolkit'


// import component
export const ResultList = (): JSX.Element => {
    const dispatch = useDispatch()
    const d = useSelector((state: SearchResultPropsInterface): SearchResultInterface => {
                return (state.SearchResult === undefined) ? initialState : state.SearchResult
            })

    if (d.results.length === 0) return (<></>)

    return (
        <div className='w-[95vw] m-auto'>
            { buildList(d.results, dispatch) }
        </div>
    )
}

const buildList = (
    d: ResultInterface[],
    dispatch: Dispatch
): JSX.Element[] => {

    const list = d.map((item: ResultInterface, index: number) => {
        return (
            <div
                key={index}
                className="
                    flex flex-row
                    w-full items-center justify-between

                    bg-white-900 dark:bg-black-900
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    border-2 border-gray-200 dark:border-gray-700
                    rounded-lg p-1 m-2
                    ">
                <div className="w-full flex grid grid-cols-4">
                    <div className="
                        grid grid-cols-4
                        text-xs leading-6 indent-1">
                        <p className="text-gray-500">SCORE : </p>
                        <p className="col-span-3">{item.score}</p>
                    </div>
                    <div className="
                        grid grid-cols-4
                        text-xs leading-7 indent-1
                        hover:text-blue-500 
                        cursor-pointer"
                        onClick={() => {
                            dispatch({
                                type: 'SearchView/set',
                                payload: {
                                    score: item.score,
                                    document: item.document,
                                    chunk: item.chunk,
                                    title: item.title,
                                    url: item.url
                                },
                            })
                            dispatch({
                                type: 'SearchScreen/result',
                            })
                        }}>
                        <p className="text-gray-500">TITLE : </p>
                        <p className="col-span-3">{item.title}</p>
                    </div>
                    <div className="
                        grid grid-cols-4
                        text-xs leading-7 indent-1">
                        <p className="text-gray-500">URL : </p>
                        <p className="col-span-3">
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                {item.url}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        )
    })
    return ( list )
}

export default ResultList
