import React from 'react'

import PageController from './page_controller'
import Button from '../_Form/Button'

export type MultiColListProps = {
    header: string[]
    contents: {
        contents: string[],
        buttons: {
            text: string,
            color: 'default' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'gray',
            onClick: (index: number, txt: string) => void
        }[]
    }
    page: number
    max_list: number
    extension: string
}


const documentList = (
    contents: MultiColListProps['contents'],
    page: MultiColListProps['page'],
    max_list: MultiColListProps['max_list'],
): JSX.Element[] => {

    const p = page * max_list
    const list: JSX.Element[] = []

    for (let i = 0; i < max_list; i++) {
        const _i = i + p

        if (contents[_i] === undefined) break

        list.push((
            <tr key={i}>
                <td className="h-px w-auto max-w-[300px] whitespace-nowrap truncate">
                    <div className="px-6 py-2 flex items-center gap-x-3">
                        <span className="
                            w-[350px]
                            text-sm text-gray-600
                            dark:text-gray-400">
                            { String(contents[_i]) } .......
                        </span>
                    </div>
                </td>
                <td className="h-px w-auto min-w-[300px] whitespace-nowrap">
                    <div className="px-6 py-2">
                        <a
                            className="flex items-center gap-x-2"
                            href="#"
                            onClick={() => {

                        }}>
                            <span
                                className="
                                    text-sm text-blue-600 decoration-2
                                    hover:underline dark:text-blue-500">
                                {  }
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

                            }}
                        />
                        <Button
                            color='red'
                            size='small'
                            text='DELETE'
                            extension=''
                            onClick={() => {
                            }}
                        />
                    </div>
                </td>
            </tr>
        ))
    }
    return list
}

// import component
export const MultiColList = (state: MultiColListProps): JSX.Element => {
    return (
        <div className="p-1.5 min-w-full inline-block align-middle">

        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
            <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Document :
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
                    onClick={() => {}}
                />
                <Button
                    uKey={'bb6'}
                    color='default'
                    size='middle'
                    text='LOAD'
                    icon='plus'
                    extension=''
                    onClick={() => {}}
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
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
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
                { documentList(state.contents, 10, 10) }
            </tbody>
        </table>

        <PageController
            max_list={state.max_list}
            elements={10}
            page={state.page}
            destination='DocumentTextList/setPage'
        />
    </div>
    )
}

export default MultiColList
