import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import reducer
import {
    DocumentScreenPropsInterface,
    DocumentScreenInterface,
    initialState
} from '../../../_domain/document/reducers/DocumentScreen'

// import component
import TextView from './TextView'
import TextEdit from './TextEdit'
import TextRemove from './TextRemove'
import EmbedView from './EmbedView'
import EmbedEdit from './EmbedEdit'
import EmbedRemove from './EmbedRemove'
import Import from './Import'

import Button from '../../_components/_Form/Button'

export const DocumentScreen = (): JSX.Element => {
    const dispatch = useDispatch()

    const es = useSelector((state: DocumentScreenPropsInterface): DocumentScreenInterface => {
        return state.DocumentScreen === undefined ? initialState : state.DocumentScreen
    })

    if (es.home) return <></>

    return (
        <div
            className="
                absolute top-0 left-0 block w-[100vw] h-[100vh]
                bg-black/70">
            <div className='h-[100vh] flex items-center justify-center '>
                <div className=" m-10 bg-black/80">
                    { checkScreen(es) }
                    <Button
                        color='dark'
                        size='middle'
                        text='Close'
                        extension='right-10 bottom-10 absolute'
                        onClick={() => {
                            dispatch({
                                type: 'DocumentScreen/reset',
                            })
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

const checkScreen = (d: DocumentScreenInterface): JSX.Element => {
    if (d.home) return <></>
    if (d.text_view) return <TextView />
    if (d.text_edit) return <TextEdit />
    if (d.text_remove) return <TextRemove />
    if (d.embed_view) return <EmbedView />
    if (d.embed_edit) return <EmbedEdit />
    if (d.embed_remove) return <EmbedRemove />
    if (d.import) return <Import />
    return <></>
}

export default DocumentScreen
