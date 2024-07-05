import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Transition, TransitionStatus } from 'react-transition-group'
import './toaster.css'

import {
    toasterAnimationPropsInterface,
    toasterAnimationInterface,
    initialState,
} from './toaster.animation.reducer'
import { Dispatch } from '@reduxjs/toolkit'

const transitionToasterStyles: {
    entering: React.CSSProperties
    entered: React.CSSProperties
    exiting: React.CSSProperties
    exited: React.CSSProperties
    unmounted: React.CSSProperties
} = {
    entering: {
        transition: 'all .15s ease',
        display: 'block',
        opacity: 1
    },
    entered: {
        transition: '',
        opacity: 1
    },
    exiting: {
        transition: 'all .10s ease',
        opacity: 0
    },
    exited: {
        transition: 'all .10s ease',
        display: 'none'
    },
    unmounted: {}
}

const defaultToasterStyle = {
    transition: 'opacity 1000ms ease-in-out',
    backgroundColor: 'white',
    display: 'block',
    opacity: 1
}

const close = (dispatch: Dispatch) => {
    dispatch({
        type: 'toasterAnimation/RESET'
    })
}
/**
 *
 * ModeList
 *
 * success  : 成功
 * info     : 情報
 * warn     : 警告
 * error    : 失敗
 */
const ToasterAnimation = () =>
{
    const dispatch = useDispatch()
    const t = useSelector((state: toasterAnimationPropsInterface): toasterAnimationInterface => {
        return state.toasterAnimation === undefined ? initialState : state.toasterAnimation
    })
    if (t.show) {
        setTimeout(() => {
            close(dispatch)
        }, 2000)
    } else {
        return(<></>)
    }
    return (
        <Transition in={t.show} timeout={550}>
            {(state: TransitionStatus) => (
                <div
                    className={'toaster toaster-' + t.mode}
                    style={{
                        ...defaultToasterStyle,
                        ...transitionToasterStyles[state]
                    }}
                >
                    <div className="toaster-text">{t.text}</div>
                    <div
                        className="toaster-close"
                        onClick={() => close(dispatch)}
                    >
                        ☓
                    </div>
                </div>
            )}
        </Transition>
    )
}

export default ToasterAnimation
