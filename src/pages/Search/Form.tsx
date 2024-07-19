import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import reducer
import {
    SearchFormPropsInterface,
    SearchFormInterface,
    initialState
} from '../../_domain/search/reducers/SearchForm'

// import component
import TextAreaInput from '../_components/_Form/TextAreaInput'
import Button from '../_components/_Form/Button'

export const Form = (): JSX.Element => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'DocumentAction/load',
            payload: ''
        })
    },[])

    const d = useSelector((state: SearchFormPropsInterface): SearchFormInterface => {
                    return (state.SearchForm === undefined) ? initialState : state.SearchForm
                })

    if (d === undefined) return (<></>)

    return (
        <div className='
                w-3/4
                absolute bottom-4 m-28'>
                <div className="flex flex-wrap m-3 mb-1">
                    <TextAreaInput
                        label='Prompt'
                        placeholder=''
                        defaultValue={d.word}
                        extension='w-full px-3'
                        rows={5}
                        cols={30}
                        onChange={(e) => {
                            dispatch({
                                type: 'SearchForm/setWord',
                                payload: e.target.value
                            })
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                dispatch({
                                    type: 'SearchAction/search',
                                })
                            }
                        }}
                    />
                </div>
                <Button
                    color='default'
                    size='middle'
                    text='SEARCH'
                    extension='absolute right-5 m-5'
                    onClick={() => {
                        dispatch({
                            type: 'SearchAction/search',
                        })
                    }}
                />
        </div>
    )
}

export default Form
