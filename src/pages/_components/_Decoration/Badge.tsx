import React from 'react'

export type BadgeProps = {
    text: string
    size: 'small' | 'middle' | 'large'
    color: 'default' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'gray'
    extension?: string
    key?: string | number
}

const sizes = (size: BadgeProps['size']) => {
    switch (size) {
        case 'small':
            return ` text-xs font-medium me-2 px-2.5 py-0.5 rounded `
        case 'middle':
            return ` text-sm font-medium me-2 px-2.5 py-0.5 rounded `
        case 'large':
            return ` text-base font-medium me-2 px-2.5 py-0.5 rounded `
    }
}

const colors = (color: BadgeProps['color']) => {
    switch (color) {
        case 'default':
            return `
                bg-gray-100
                text-gray-600
                dark:bg-gray-400
                dark:text-gray-100
                `
        case 'dark':
            return `
                bg-gray-100
                text-gray-800
                dark:bg-gray-700
                dark:text-gray-300
            `
        case 'green':
            return `
                bg-green-100
                text-green-800
                dark:bg-green-900
                dark:text-green-300
            `
        case 'red':
            return `
                bg-red-100
                text-red-800
                dark:bg-red-900
                dark:text-red-300
            `
        case 'yellow':
            return `
                bg-yellow-100
                text-yellow-800
                dark:bg-yellow-900
                dark:text-yellow-300
            `
        case 'blue':
            return `
                bg-blue-100
                text-blue-800
                dark:bg-blue-900
                dark:text-blue-300
            `
        case 'purple':
            return `
                bg-purple-100
                text-purple-800
                dark:bg-purple-900
                dark:text-purple-300
            `
        case 'gray':
            return `
                bg-gray-100
                text-gray-800
                dark:bg-gray-700
                dark:text-gray-300
            `
    }
}


// import component
export const Badge = (state: BadgeProps): JSX.Element => {
    return (
        <span
            key={state.key? state.key : ''}
            className={
                ' '
                + sizes(state.size) + colors(state.color)
                + (state.extension ? state.extension : '')
            }
        >
            {state.text}
        </span>
    )
}

export default Badge
