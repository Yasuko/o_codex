import React from 'react'

export type DescriptionListProps = {
    contents: string[]
    slice?: number
    extension: string
    onClick: (index: number, txt: string) => void
}


// import component
export const DescriptionList = (state: DescriptionListProps): JSX.Element => {
    return (
        <dl
            className="
                max-w-md
                text-gray-900
                divide-y divide-gray-200
                dark:text-white ">
            { documentList(state) }
        </dl>
    )
}

const documentList = (
    state: DescriptionListProps
): JSX.Element[] => {

    const list = state.contents.map((txt, i) => {
        return (
            <div
                key={i}
                className="flex flex-col pb-3 pointer"
                onClick={() => {
                    state.onClick(i, txt)
                }}>
                <a
                href="#"
                >
                <dd className="text-sm m-2">
                    { state.slice ? txt.substring(0, state.slice) : txt }...
                </dd>
                </a>
            </div>
        )
    })
    return list
}


export default DescriptionList
