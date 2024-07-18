import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import reducer
import {
    DocumentTextFormPropsInterface,
    DocumentTextFormInterface,
    initialState
} from '../../../_domain/document/reducers/DocumentTextForm'
import EmbedView from './EmbedView'

// import component
import DescriptionList from '../../_components/_List/DescriptionList'
import TextBox from '../../_components/_View/TextBox'


export const TextView = (): JSX.Element => {
    const dispatch = useDispatch()
    const d = useSelector((state: DocumentTextFormPropsInterface): DocumentTextFormInterface => {
        return (state.DocumentTextForm === undefined) ? initialState : state.DocumentTextForm
    })

    if (d === undefined) return (<></>)

    return (
        <div className='w-svw absolute top-4 left-0'>
            <div className="flex flex-wrap mb-1">
                <TextBox
                    label='Title'
                    text={d.title}
                    extension='w-4/5 px-3 mx-auto mt-5'
                />
                <TextBox
                    label='URL'
                    text={d.url}
                    extension='w-4/5 px-3 mx-auto my-2 '
                />
                <div className="
                        w-4/5 h-[700px] grid grid-cols-3 gap-3
                        px-3 mx-auto rounded
                    ">
                    <div className="">
                        <label
                            className="
                                block uppercase tracking-wide
                                text-black text-xs font-bold
                                mb-2
                                dark:text-gray-400"
                            htmlFor="grid-password">
                            DOCUMENT
                        </label>
                        <DescriptionList
                            contents={d.document}
                            extension=''
                            slice={20}
                            onClick={(index) => {
                                {
                                    dispatch({
                                        type: 'DocumentAction/setEmbed',
                                        payload: {
                                            key: d.key,
                                            index: index
                                        }
                                    })
                                }
                            }}
                        />
                    </div>
                    <div className="col-span-2">
                        <EmbedView />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default TextView
