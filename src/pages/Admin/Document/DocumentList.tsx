import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'

// import reducer
import {
    DocumentTextListPropsInterface,
    DocumentTextListInterface,
    initialState
} from '../../../_domain/document/reducers/DocumentTextList'

// import component
import PageController from '../../_components/_List/page_controller'
import Button from '../../_components/_Form/Button'
import Badge from '../../_components/_Decoration/Badge'

export const DocumentList = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((state: DocumentTextListPropsInterface): DocumentTextListInterface => {
                return (state.DocumentTextList === undefined) ? initialState : state.DocumentTextList
            })
    
    const page: JSX.Element[] = buildList(d, dispatch)
    const num = d.texts.length

    return (
    <div className="w-svw py-10 sm:px-6 lg:px-8 lg:py-14">
        <Button
            uKey={'b0'}
            color='green'
            size='small'
            text='RESET'
            extension=''
            onClick={() => {
                dispatch({type: 'DocumentAction/resetEmbed'})
            }}
        />
        <Button
            uKey={'b1'}
            color='blue'
            size='small'
            text='SAVE'
            extension=''
            onClick={() => {
                dispatch({type: 'DocumentAction/save'})
            }}
        />
        <Button
            uKey={'b2'}
            color='green'
            size='small'
            text='LOAD'
            extension=''
            onClick={() => {
                dispatch({type: 'DocumentAction/load'})
            }}
        />
        <Button
            uKey={'b3'}
            color='blue'
            size='small'
            text='IMPORT'
            extension=''
            onClick={() => {
                dispatch({type: 'DocumentScreen/import'})
            }}
        />
        <Button
            uKey={'b4'}
            color='green'
            size='small'
            text='EXPORT'
            extension=''
            onClick={() => {
                dispatch({type: 'DocumentAction/exportDocument'})
            }}
        />

        <div className="flex flex-col">
            <div className="-m-1.5 ">
                <div className="p-1.5 min-w-full inline-block align-middle">

                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Document :{num}
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                            all documents
                            </p>
                        </div>

                        <div className="inline-flex gap-x-2 me-5">
                            <Button
                                uKey={'bb5'}
                                color='default'
                                size='middle'
                                text='EMBED'
                                icon='plus'
                                extension=''
                                onClick={() => dispatch({
                                        type: 'DocumentAction/doEmbed',
                                    })}
                            />
                            <Button
                                uKey={'bb6'}
                                color='default'
                                size='middle'
                                text='LOAD'
                                icon='plus'
                                extension=''
                                onClick={() => dispatch({
                                        type: 'SourceAction/throwList',
                                        payload: 'DocumentAction/load_url'
                                    })}
                            />
                        </div>
                    </div>

                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            <tr>
                                <th
                                    scope="col"
                                    className="
                                        px-6 py-3 text-start border-s border-gray-200
                                        dark:border-gray-700">
                                    <span
                                        className="
                                        center
                                        text-xs font-semibold uppercase
                                        tracking-wide text-gray-800 dark:text-gray-200">
                                    Text
                                    </span>
                                </th>

                                <th scope="col" className="px-6 py-3 text-start">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                    URL
                                    </span>
                                </th>
                                <th scope="col" className="px-6 py-3 text-start">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                        etc
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
                        destination='DocumentTextList/setPage'
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

const buildList = (
    d: DocumentTextListInterface,
    dispatch: Dispatch
): JSX.Element[] => {

    const p = d.page * d.max_list
    const list: JSX.Element[] = []

    for (let i = 0; i < d.max_list; i++) {
        const _i = i + p

        if (d.texts[_i] === undefined) break

        list.push((
            <tr key={i}>
                <td className="h-px w-auto max-w-[300px] whitespace-nowrap truncate">
                    <div className="px-6 py-2 flex items-center gap-x-3">
                        <span className="
                            w-[350px]
                            text-sm text-gray-600
                            dark:text-gray-400">
                            { String(d.texts[_i].title) } .......
                        </span>
                    </div>
                </td>
                <td className="h-px w-auto min-w-[300px] whitespace-nowrap">
                    <div className="px-6 py-2">
                        <a
                            className="flex items-center gap-x-2"
                            href="#"
                            onClick={() => {
                                dispatch({
                                    type: 'DocumentTextForm/set',
                                    payload: d.texts[_i],
                                })
                                dispatch({
                                    type: 'DocumentScreen/textView',
                                })
                        }}>
                            <span
                                className="
                                    text-sm text-blue-600 decoration-2
                                    hover:underline dark:text-blue-500">
                                { String(d.texts[_i].url).substring(0, 30) }
                            </span>
                        </a>
                    </div>
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
                                        title: d.texts[_i].title,
                                        url: d.texts[_i].url,
                                        index: _i
                                    }
                                })
                                dispatch({
                                    type: 'DocumentScreen/edit',
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
                                    type: 'SourceForm/remove',
                                    payload: i
                                })
                                dispatch({
                                    type: 'DocumentScreen/remove',
                                })
                            }}
                        />
                        <Badge
                            size='small'
                            text={ d.texts[_i].embedding === false ? '未変換' : '変換済'}
                            color={ d.texts[_i].embedding === false ? 'red' : 'green' }
                        />
                    </div>
                </td>
            </tr>
        ))
    }
    return list
}

export default DocumentList
