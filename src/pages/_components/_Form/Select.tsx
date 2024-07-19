import React from 'react'

export type SelectProps = {
    label: string
    contents: {
        value: string
        text: string
    }[]
    type: 'single' | 'multi'
    height?: number
    defaultValue?: string
    extension?: string
    id?: string
    onChange: (e) => void
}

const BaseClass = `
    max-w-sm mx-auto
`

const buildList = (contents: { value: string, text: string }[]): JSX.Element[] => {
    return contents.map((item, index) => {
        return (
            <option key={index} value={item.value}>{item.text}</option>
        )
    })
}


// import component
export const TextInput = (state: SelectProps): JSX.Element => {
    return (
        <div className={BaseClass + (state.extension ? state.extension : '')}>
            <label htmlFor="underline_select" className="sr-only">
                { state.label }
            </label>
            <select
                multiple={state.type === 'multi'}
                id="underline_select"
                size={state.height ? state.height : 1}
                className="
                    block py-2.5 px-0 w-full
                    text-sm text-gray-500
                    bg-transparent border-0 border-b-2 border-gray-200
                    appearance-none
                    dark:text-gray-400 dark:border-gray-700
                    focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={state.onChange}>
                { buildList(state.contents)}
            </select>
        </div>
    )
}

export default TextInput
