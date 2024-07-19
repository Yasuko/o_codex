import React from 'react'

export type CheckboxProps = {
    label: string
    size: 'small' | 'middle' | 'large'
    color: 'default' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'gray'
    icon?: 'search' | 'plus' | 'check' | 'calendar' | 'camera'
            | 'up' | 'down' | 'left' | 'right' | 'bars' | 'book'
            | 'bug' | 'file' | 'file-copy' | 'grid' | 'home'
            | 'headphone'| 'microphone' | 'printer' | 'profile'
            | 'search'
    disabled?: boolean
    extension?: string
    uKey?: string | number
    onChange: () => void
}

const colors = (color: CheckboxProps['color']) => {
    switch (color) {
        case 'default':
            return `
                text-gray-900 bg-white hover:bg-gray-100
                border-gray-200
                hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100
                dark:focus:ring-gray-700
                dark:bg-gray-800 dark:hover:bg-gray-700
                dark:text-gray-400 dark:hover:text-white
                dark:border-gray-600 `
        case 'dark':
            return `
                text-white bg-gray-800 hover:bg-gray-900
                focus:ring-gray-300
                dark:bg-gray-800 dark:hover:bg-gray-700
                dark:focus:ring-gray-700 dark:border-gray-700
            `
        case 'light':
            return `
                text-gray-900 bg-white border-gray-300 
                hover:bg-gray-100 focus:ring-gray-100
                dark:bg-gray-800 dark:text-white dark:border-gray-600
                dark:hover:bg-gray-700 dark:hover:border-gray-600
                dark:focus:ring-gray-700
            `
        case 'green':
            return `
                text-white bg-green-700
                hover:bg-green-800 focus:border-green-300
                dark:bg-green-600 dark:hover:bg-green-700
                dark:border-green-500
                dark:focus:border-green-800
            `
        case 'red':
            return `
                text-white bg-red-700
                hover:bg-red-800 focus:ring-red-300
                dark:bg-red-600 dark:hover:bg-red-700
                dark:border-red-500
                dark:focus:border-red-900
            `
        case 'yellow':
            return `
                text-white bg-yellow-400
                hover:bg-yellow-500 focus:ring-4
                focus:ring-yellow-300
                dark:focus:ring-yellow-900
                dark:border-yellow-500
                dark:hover:border-yellow-900
            `
        case 'blue':
            return `
                text-white bg-blue-700
                hover:bg-blue-800 focus:ring-blue-300
                dark:bg-blue-600 dark:hover:bg-blue-700
                dark:border-blue-500
                dark:focus:ring-blue-800
            `
        case 'purple':
            return `
                text-white bg-purple-700
                hover:bg-purple-800 focus:ring-purple-300
                dark:bg-purple-600 dark:hover:bg-purple-700
                dark:border-purple-500
                dark:focus:ring-purple-900
            `
        case 'gray':
            return ' bg-gray-500 hover:bg-gray-600 text-white '
    }
}

// import component
export const Checkbox = (state: CheckboxProps): JSX.Element => {
    const k = state.uKey ? state.uKey : generateRandomString(8)
    return (
        <div
            className="flex items-center mb-4"
            key={k}>
            <input
                id="default-checkbox"
                type="checkbox"
                value=""
                disabled={state.disabled ? state.disabled : false}
                className="
                    w-4 h-4 text-blue-600
                    bg-gray-100 border-gray-300 rounded
                    focus:ring-blue-500
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800
                    focus:ring-2
                    dark:bg-gray-700 dark:border-gray-600"
                onChange={state.onChange} />
            <label
                htmlFor="default-checkbox"
                className="
                    ms-2
                    text-sm font-medium text-gray-900
                    dark:text-gray-300">
                {state.label}
            </label>
        </div>
    )
}

const generateRandomString = (length: number): string => {
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters[randomIndex]
    }
    return result
}

export default Checkbox
