import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer

// import component

export const DebugController = (): JSX.Element => {
    const dispatch = useDispatch()

    return (
        <div className='
            grid grid-cols-1 gap-2
            absolute top-10 right-2 mt-10'>
            <div className='text-center'>
                DebugTools
            </div>
            <div className='
                bg-gray-500 hover:bg-gray-700
                text-white font-bold py-2 px-4 rounded-full
                cursor-pointer text-center'
                onClick={() => {
                    dispatch({
                        type: 'DebugAction/deleteChromadb',
                    })
                }}
            >
                ChromaDell
            </div>
            <div className='
                bg-gray-500 hover:bg-gray-700
                text-white font-bold py-2 px-4 rounded-full
                cursor-pointer text-center'
                onClick={() => {
                    dispatch({
                        type: 'DebugAction/getAllChromadbData',
                    })
                }}
            >
                GetAllChroma
            </div>
            <div className='
                bg-gray-500 hover:bg-gray-700
                text-white font-bold py-2 px-4 rounded-full
                cursor-pointer text-center'
                onClick={() => {
                    dispatch({
                        type: 'DebugAction/deleteMysql',
                    })
                }}
            >
                MysqlDell
            </div>
        </div>
    )
}

export default DebugController
