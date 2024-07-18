import React from 'react'

export type TextBox2Props = {
    label: string
    text: string | JSX.Element
    extension: string
    id?: string
}

const BaseStyle = `
    z-0 w-3/4 m-auto
`

// import component
export const TextBox2 = (state: TextBox2Props): JSX.Element => {
    const random = Math.floor(Math.random() * 1000)
    return (
        <div className={BaseStyle + state.extension}>
            <label
                className="
                    block uppercase tracking-wide
                    text-white-700 text-xs font-bold
                    mb-2
                    dark:text-gray-400"
                >
                {state.label}
            </label>
            <pre
                className="
                    py-2 px-3 pe-11 block
                    w-auto h-[200px] border-gray-200 shadow-sm rounded-lg
                    overflow-y-auto overflow-x-hidden
                    text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
                    disabled:opacity-50 disabled:pointer-events-none
                    dark:bg-white-900 dark:border-black dark:text-white
                    dark:focus:ring-gray-600"
                id={state.id ? state.id : 'text-box-2' + random}
                >
                { state.text }
            </pre>
        </div>
    )
}

export default TextBox2
