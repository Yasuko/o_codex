import React from 'react'

export type TextBoxProps = {
    label: string
    text: string
    extension: string
}

const BaseStyle = `
    z-0 w-3/4 m-auto
`

// import component
export const TextBox = (state: TextBoxProps): JSX.Element => {
    return (
        <div className={BaseStyle + state.extension}>
            <pre
                id="text-box"
                className="
                    block py-2.5 px-0 w-full
                    indent-28 text-sm text-gray-900
                    bg-transparent border-0 border-b-2 border-gray-300
                    appearance-none
                    dark:text-white dark:border-gray-600
                    dark:focus:border-blue-500
                    focus:outline-none focus:ring-0 focus:border-blue-600 peer
                    "
            >
                {state.text}
            </pre>

            <label
                htmlFor="text-box"
                className="
                peer-focus:font-medium relative
                text-sm text-gray-500
                dark:text-gray-400
                -top-6 left-2
                ">
                    {state.label}
            </label>
        </div>
    )
}

export default TextBox
