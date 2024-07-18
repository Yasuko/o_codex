import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    SourceFormPropsInterface,
    SourceFormInterface,
    initialState
} from '../../../_domain/source/reducers/SourceForm'


// import component
import TextInput from '../../_components/_Form/TextInput'
import TextAreaInput from '../../_components/_Form/TextAreaInput'
import Button from '../../_components/_Form/Button'

export const Edit = (): JSX.Element => {
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
        <div className='w-svw absolute top-20 left-0'>
            <form className="m-20 w-3/4 m-auto">
                <div className="flex flex-wrap mx-3 mb-1">
                    <TextInput
                        label='Title'
                        type='text'
                        placeholder=''
                        defaultValue={d.title}
                        extension='w-full px-3'
                        id='source-editor-title'
                        onChange={(e) => _setForm(e.target.value, 'setTitle')}
                    />
                    <TextAreaInput
                        label='Text'
                        placeholder=''
                        defaultValue={d.text}
                        extension='w-full px-3'
                        rows={5}
                        cols={30}
                        id='source-editor-text'
                        onChange={(e) => _setForm(e.target.value, 'setText')}
                    />
                    <TextInput
                        label='URL'
                        type='url'
                        placeholder=''
                        defaultValue={d.url}
                        extension='w-full px-3'
                        id='source-editor-url'
                        onChange={(e) => _setForm(e.target.valuie, 'setURL')}
                    />
                </div>
                <Button
                    color='default'
                    size='middle'
                    text='UPDATE'
                    extension='absolute right-28 m-10'
                    onClick={() => {
                        dispatch({
                            type: 'SourceAction/update',
                        })
                    }}
                />
            </form>
        </div>
    )
}

export default Edit
