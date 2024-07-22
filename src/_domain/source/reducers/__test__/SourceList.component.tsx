import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    SourceListPropsInterface,
    SourceListInterface,
    initialState
} from '../SourceList'

// import component

export const SourceListComponent = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((state: SourceListPropsInterface): SourceListInterface => {
                    return (state.SourceList === undefined) ? initialState : state.SourceList
                })

    return (
        <div className='w-svw absolute bottom-4'>
            {/* @type SourceListInterface */}
            <input
                type='text'
                id='set-add'
                value=''
                onChange={(e) => dispatch({
                    type: 'SourceList/add',
                    payload: JSON.parse(e.target.value)
                })}
            />
            {/* @type SourceListInterface + {index: number} */}
            <input
                type='text'
                id='set-update'
                value=''
                onChange={(e) => dispatch({
                    type: 'SourceList/update',
                    payload: JSON.parse(e.target.value)
                })}
            />
            {/* @type number */}
            <input
                type='text'
                id='set-remove'
                value=''
                onChange={(e) => dispatch({
                    type: 'SourceList/remove',
                    payload: e.target.value
                })}
            />
            {/* @type number */}
            <input
                type='text'
                id='set-page'
                value=''
                onChange={(e) => dispatch({
                    type: 'SourceList/page',
                    payload: e.target.value
                })}
            />
            {/* @type number */}
            <input
                type='text'
                id='set-max-list'
                value=''
                onChange={(e) => dispatch({
                    type: 'SourceList/maxList',
                    payload: e.target.value
                })}
            />
            <button
                id='reset-button'
                onClick={() => dispatch({
                    type: 'SourceList/reset'
                })}
            > Reset </button>
            <div id="page">{d.page}</div>
            <div id="max_list">{d.max_list}</div>
            <div id="sources">{JSON.stringify(d.sources)}</div>
        </div>
    )
}

export default SourceListComponent
