import React from 'react'
import { useDispatch } from 'react-redux'

import { Dispatch } from '@reduxjs/toolkit'


// import component
export const Import = (): JSX.Element => {
    const dispatch = useDispatch()
    return (
        <div className='w-[100vw] '>
            <div className="flex flex-wrap mx-3 mb-1">
                <div className="w-[100vw] px-3">
                    <label
                        className="
                            h-20
                            block uppercase tracking-wide
                            text-white-700 text-xs font-bold text-center
                            mb-2 mt-10"
                        htmlFor="grid-password">
                        Import Source List
                    </label>
                    <div className="flex">
                        <div
                            className="
                                m-auto w-[300px] h-[300px]
                                border-2 rounded-lg border-gray-300 bg-gray-200
                                text-center
                                drag:bg-gray-300
                            "
                            onDragOver={(e: React.DragEvent) => onDragStart(e)}
                            onDrop={(e: React.DragEvent) => onDragEnd(e, dispatch)}
                        >
                            <p className="m-28">Drag Area</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const onDragStart = (e: React.DragEvent): void => e.preventDefault()

const onDragEnd = (
    e: React.DragEvent,
    dispatch: Dispatch
): void => {
    e.preventDefault()
    
    dispatch({
        type    : 'SourceAction/importSource',
        payload : e
    })
    e.stopPropagation()

    dispatch({
        type    : 'SourceScreen/reset'
    })
}

export default Import
