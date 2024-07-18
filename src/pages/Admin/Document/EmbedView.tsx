import React from 'react'
import { useSelector } from 'react-redux'

// import reducer
import {
    DocumentEmbedViewPropsInterface,
    DocumentEmbedViewInterface,
    initialState
} from '../../../_domain/document/reducers/DocumentEmbedView'

// import component
import TextBox2 from '../../_components/_View/TextBox2'

export const EmbedView = (): JSX.Element => {

    const d = useSelector((state: DocumentEmbedViewPropsInterface): DocumentEmbedViewInterface => {
        return (state.DocumentEmbedView === undefined) ? initialState : state.DocumentEmbedView
    })

    if (d === undefined) return (<></>)

    return (
        <div className='absolute'>
            <div className="flex flex-wrap mx-3 mb-1">
                <TextBox2
                    label='Document'
                    text={d.document}
                    extension=''
                />
                <TextBox2
                    label='EMBEDDING'
                    text={ grid(d.embedding[0]) }
                    extension=''
                />
                <TextBox2
                    label='EMBEDDING_N'
                    text={ grid(d.embedding_n[0]) }
                    extension=''
                />
            </div>
        </div>
    )
}

const grid = (d: number[]): JSX.Element => {
    
    if (d === undefined) return (<></>)

    const g: JSX.Element[] = []
    for (let i = 0; i < d.length; i++) {
        g.push(<div key={i} className='text-center'>{ d[i] }</div>)
    }
    
    return (
        <div className='w-[500px] grid grid-cols-5'>
            { g }
        </div>
    )
}


export default EmbedView
