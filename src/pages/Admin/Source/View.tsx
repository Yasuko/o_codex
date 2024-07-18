import React from 'react'
import { useSelector } from 'react-redux'

// import reducer
import {
    SourceFormPropsInterface,
    SourceFormInterface,
    initialState
} from '../../../_domain/source/reducers/SourceForm'

// import component
import TextBox from '../../_components/_View/TextBox'

export const View = (): JSX.Element => {
    const d = useSelector((state: SourceFormPropsInterface): SourceFormInterface => {
                return (state.SourceForm === undefined) ? initialState : state.SourceForm
            })

    return (
        <div className='w-[100vw] absolute top-10 left-0'>
            <div className="flex flex-wrap m-auto mt-28 w-3/4">
                <TextBox
                    label='Title'
                    text={d.title}
                    extension='w-full px-3 mb-10'
                />
                <TextBox
                    label='Text'
                    text={d.text}
                    extension='w-full px-3 mb-10'
                />
                <TextBox
                    label='URL'
                    text={d.url}
                    extension='w-full px-3 mb-10'
                />
            </div>
        </div>
    )
}

export default View
