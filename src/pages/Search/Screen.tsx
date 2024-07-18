import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import reducer
import {
    SearchScreenPropsInterface,
    SearchScreenInterface,
    initialState
} from '../../_domain/search/reducers/SearchScreen'
import View from './View'

// import component
import TokenForm from '../_components/TokenForm'

export const Screen = (): JSX.Element => {
    const dispatch = useDispatch()

    const es = useSelector((state: SearchScreenPropsInterface): SearchScreenInterface => {
        return state.SearchScreen === undefined ? initialState : state.SearchScreen
    })

    if (es.home) return <></>

    return (
        <div
            className="
                absolute top-0 left-0 block w-[98vw] h-full
                bg-black/70 ">
            <div className='h-svh flex items-center justify-center '>
                aaa
                <div className=" m-10 bg-black/80">
                    { checkScreen(es) }
                    <button
                        className='
                        bg-slate-600 text-white rounded
                        p-2 bottom-10 right-10 absolute
                        cursor-pointer'
                        onClick={
                            () => {
                                dispatch({
                                    type: 'SearchScreen/reset',
                                })
                            }
                        }
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

const checkScreen = (d: SearchScreenInterface): JSX.Element => {
    if (d.result) return <View />
    if (d.token) return <TokenForm toDispatch='SearchScreen/reset' />
    return <></>
}

export default Screen
