import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    SourceFormPropsInterface,
    SourceFormInterface,
    initialState
} from '../../../_domain/source/reducers/SourceForm'

// import component
import Button from '../../_components/_Form/Button'
import TextInput from '../../_components/_Form/TextInput'
import TextAreaInput from '../../_components/_Form/TextAreaInput'

export const New = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((state: SourceFormPropsInterface): SourceFormInterface => {
                return (state.SourceForm === undefined) ? initialState : state.SourceForm
            })

    const _setForm = (val: string, target: string) => {
        dispatch({
            type: 'SourceForm/' + target,
            payload: val
        })
    }

    return (
        <div className='w-svw absolute top-0 left-0'>
            <div className="flex flex-wrap w-3/4 m-auto mt-28">
                <TextInput
                    label='Title'
                    type='text'
                    placeholder=''
                    defaultValue={d.title}
                    extension='w-full px-3'
                    onChange={(e) => _setForm(e.target.value, 'setTitle')}
                />
                <TextAreaInput
                    label='Text'
                    placeholder=''
                    defaultValue={d.text}
                    extension='w-full'
                    rows={5}
                    cols={30}
                    onChange={(e) => _setForm(e.target.value, 'setText')}
                />
                <TextInput
                    label='URL'
                    type='text'
                    placeholder=''
                    defaultValue={d.url}
                    extension='w-full px-3'
                    onChange={(e) => _setForm(e.target.value, 'setURL')}
                />
            </div>
            <Button
                color='default'
                size='middle'
                text='ADD'
                extension='absolute right-28 m-10'
                onClick={() => {
                    dispatch({
                        type: 'SourceAction/add',
                    })
                }}
            />
        </div>
    )
}

export default New
