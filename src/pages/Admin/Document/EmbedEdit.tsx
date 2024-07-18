import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    DocumentEmbedFormPropsInterface,
    DocumentEmbedFormInterface,
    initialState
} from '../../../_domain/document/reducers/DocumentEmbedForm'

// import component
import TextAreaInput from '../../_components/_Form/TextAreaInput'
import TextInput from '../../_components/_Form/TextInput'
import Button from '../../_components/_Form/Button'

export const Edit = (): JSX.Element => {
    const dispatch = useDispatch()

    const d = useSelector((state: DocumentEmbedFormPropsInterface): DocumentEmbedFormInterface => {
                    return (state.DocumentEmbedForm === undefined) ? initialState : state.DocumentEmbedForm
                })
    const _setForm = (val: string, target: string) => {
        dispatch({
            type: 'DocumentEmbedForm/' + target,
            payload: val
        })
    }

    if (d === undefined) return (<></>)

    return (
        <div className='w-svw absolute bottom-4'>
            <form className="m-20">
                <div className="flex flex-wrap mx-3 mb-1">
                    <TextAreaInput
                        label='Document'
                        placeholder=''
                        defaultValue={JSON.stringify(d.document)}
                        extension='w-full px-3'
                        rows={5}
                        cols={30}
                        onChange={(e) => _setForm(e.target.value, 'setDocument')}
                    />
                    <TextInput
                        label='Embedding'
                        type='text'
                        placeholder=''
                        defaultValue={JSON.stringify(d.embedding).substring(1, 50)}
                        extension='w-full px-3'
                        onChange={(e) => _setForm(e.target.value, 'setEmbedding')}
                    />
                    <TextInput
                        label='EmbeddingN'
                        type='text'
                        placeholder=''
                        defaultValue={JSON.stringify(d.embedding_n).substring(1, 50)}
                        extension='w-full px-3'
                        onChange={(e) => _setForm(e.target.value, 'setEmbeddingN')}
                    />
                </div>
                <Button
                    color='default'
                    size='medium'
                    text='UPDATE'
                    extension='absolute right-28 m-10'
                    onClick={() => {
                        dispatch({
                            type: 'DocumentAction/updateEmbed',
                        })
                    }}
                />
            </form>
        </div>
    )
}

export default Edit
