import React from 'react'

export type TextAreaInputProps = {
    label: string
    placeholder?: string
    defaultValue?: string
    extension: string
    cols: number
    rows: number
    id?: string
    onChange: (e) => void
}

// import component
export const TextAreaInput = (state: TextAreaInputProps): JSX.Element => {
    return (
        <div className="relative z-0 w-full m-3 mb-5 group">
            <textarea
                name="txt-area-input-form"
                id={state.id ? state.id : 'text-area-input'}
                className="
                    block py-2.5 px-0 w-full
                    text-sm text-gray-900
                    bg-transparent border-0 border-b-2 border-gray-300
                    appearance-none
                    dark:text-white dark:border-gray-600
                    dark:focus:border-blue-500
                    focus:outline-none focus:ring-0 focus:border-blue-600 peer
                    "
                cols={state.cols ? state.cols : 30}
                rows={state.rows ? state.rows : 5}
                placeholder={state.placeholder ? state.placeholder : ''}
                defaultValue={state.defaultValue ? state.defaultValue : ''}
                onChange={state.onChange}
                required />
            <label
                htmlFor="txt-area-input-form"
                className="
                peer-focus:font-medium absolute
                text-sm text-gray-500
                dark:text-gray-400 duration-300
                transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                rtl:peer-focus:left-auto
                peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75 peer-focus:-translate-y-6">
                    {state.label}
            </label>
        </div>
    )
}

export default TextAreaInput
