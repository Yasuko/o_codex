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
import Button from '../../_components/_Form/Button'
import PageController from '../../_components/_List/page_controller'

export const List = (): JSX.Element => {
    const dispatch = useDispatch()
    const d = useSelector((state: SourceListPropsInterface): SourceListInterface => {
                return (state.SourceList === undefined) ? initialState : state.SourceList
            })

    const page: JSX.Element[] = buildList(d, dispatch)
    const num = d.sources.length

    return (
        <div className="w-svw py-10 sm:px-6 lg:px-8 lg:py-14">
            <Button
                color='blue'
                size='small'
                text='SAVE'
                uKey={'s0'}
                extension=''
                onClick={() => {
                    dispatch({
                        type: 'SourceAction/save',
                    })
                }}
            />
            <Button
                color='green'
                size='small'
                text='LOAD'
                uKey={'s1'}
                extension=''
                onClick={() => {
                    dispatch({
                        type: 'SourceAction/load',
                    })
                }}
            />
            <Button
                color='red'
                size='small'
                text='EXPORT'
                uKey={'s2'}
                extension=''
                onClick={() => {
                    dispatch({
                        type: 'SourceAction/exportSource',
                    })
                }}
            />
            <Button
                color='yellow'
                size='small'
                text='IMPORT'
                uKey={'s3'}
                extension=''
                onClick={() => {
                    dispatch({
                        type: 'SourceScreen/import',
                    })
                }}
            />
            <div className="flex flex-col">
            <div className="-m-1.5 ">
                <div className="p-1.5 min-w-full inline-block align-middle">
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
                            <Button
                                color='blue'
                                size='middle'
                                text='ADD'
                                uKey={'s4'}
                                icon='plus'
                                extension=''
                                onClick={() => {
                                    dispatch({type: 'SourceForm/reset'})
                                    dispatch({type: 'SourceScreen/new'})
                                }}
                            />
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
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            URL
                            </span>
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
                            {d.sources[_i].title.substring(0, 60)} .......
                        </span>
                    </div>
                </td>
                <td className="h-px w-auto min-w-[100px] whitespace-nowrap">
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
                </td>
                <td className="h-px w-auto min-w-[100px] whitespace-nowrap">
                    <div className="px-6 py-2">
                        <Button
                            color='green'
                            size='small'
                            text='EDIT'
                            extension=''
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
                                    type: 'SourceScreen/edit',
                                })
                            }}
                        />
                        <Button
                            color='red'
                            size='small'
                            text='DELETE'
                            extension=''
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
                            }}
                        />
                    </div>
                </td>
            </tr>
        ))
    }
    return list
}

export default List
