import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import reducer
import {
    SourceScreenPropsInterface,
    SourceScreenInterface,
    initialState
} from '../../../_domain/source/reducers/SourceScreen'

// import component
import New from './New'
import Edit from './Edit'
import View from './View'
import Remove from './Remove'
import Import from './Import'

import Button from '../../_components/_Form/Button'


export const Screen = (): JSX.Element => {
    const dispatch = useDispatch()

    const ss = useSelector((state: SourceScreenPropsInterface): SourceScreenInterface => {
        return state.SourceScreen === undefined ? initialState : state.SourceScreen
    })

    if (ss.home) return <></>

    return (
        <div
            className="
                absolute top-0 left-0 block w-[100vw] h-[100vh]
                bg-black/70 ">
            <div className='h-[100vh] flex items-center justify-center '>
                <div className="m-10 bg-black/80">
                    { checkScreen(ss) }
                    <Button
                        color='dark'
                        size='middle'
                        text='Close'
                        extension='right-10 bottom-10 absolute'
                        onClick={() => {
                            dispatch({
                                type: 'SourceScreen/reset',
                            })
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

const checkScreen = (d: SourceScreenInterface): JSX.Element => {
    if (d.new) return <New />
    if (d.edit) return <Edit />
    if (d.view) return <View />
    if (d.remove) return <Remove />
    if (d.import) return <Import />
    if (d.home) return <></>
    return <></>
}

export default Screen
