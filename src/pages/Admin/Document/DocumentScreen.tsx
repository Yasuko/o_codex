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
                    <button
                        className='
                            bg-slate-600 text-white rounded
                            p-2 right-10 absolute
                            cursor-pointer'
                        onClick={
                            () => {
                                dispatch({
                                    type: 'DocumentScreen/reset',
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
