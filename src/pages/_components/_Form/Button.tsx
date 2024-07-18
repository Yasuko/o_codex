import React from 'react'

export type ButtonProps = {
    text: string
    size: 'small' | 'middle' | 'large'
    color: 'default' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'gray'
    icon?: 'search' | 'plus' | 'check' | 'calendar' | 'camera'
            | 'up' | 'down' | 'left' | 'right' | 'bars' | 'book'
            | 'bug' | 'file' | 'file-copy' | 'grid' | 'home'
            | 'headphone'| 'microphone' | 'printer' | 'profile'
            | 'search'
    extension?: string
    uKey?: string | number
    onClick: () => void
}

const sizes = (size: ButtonProps['size']) => {
    switch (size) {
        case 'small':
            return ` inline-flex py-1 px-2 me-2 mb-2 text-sm font-medium `
        case 'middle':
            return ` inline-flex py-2.5 px-5 me-2 mb-2 text-sm font-medium  `
        case 'large':
            return ` inline-flex py-2.5 px-5 me-2 mb-2 text-xl font-medium  `
    }
}

const colors = (color: ButtonProps['color']) => {
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

const Icons = (icon: ButtonProps['icon']) => {
    switch (icon) {
        case 'check':
            return buildIconPath(["M5 11.917 9.724 16.5 19 7.5"])
        case 'plus':
            return buildIconPath(["M5 12h14m-7 7V5"])
        case 'calendar':
            return buildIconPath(["M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"])
        case 'camera':
            return buildIconPath(["M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z",
                                    "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"])
        case 'up':
            return buildIconPath(["m5 15 7-7 7 7"])
        case 'down':
            return buildIconPath(["m19 9-7 7-7-7"])
        case 'left':
            return buildIconPath(["m15 19-7-7 7-7"])
        case 'right':
            return buildIconPath(["m9 5 7 7-7 7"])
        case 'bars':
            return buildIconPath(["M5 7h14M5 12h14M5 17h14"])
        case 'book':
            return buildIconPath(["M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"])
        case 'bug':
            return buildIconPath(["M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8"])
        case 'file':
            return buildIconPath(["M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"])
        case 'file-copy':
            return buildIconPath(["M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"])
        case 'grid':
            return buildIconPath(["M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"])
        case 'home':
            return buildIconPath(["m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"])
        case 'headphone':
            return buildIconPath(["M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"])
        case 'microphone':
            return buildIconPath(["M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"])
        case 'printer':
            return buildIconPath(["M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"])
        case 'profile':
            return buildIconPath(["M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"])
        case 'search':
            return buildIconPath(["m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"])
    }
}
const buildIconPath = (paths: string[]): JSX.Element => {
    const list = paths.map((path) => {
        return (
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2" d={path}
            />
        )
    })
    return (
        <svg
            className="
                flex-shrink-0
                size-5 mr-2
                "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none"
            viewBox="0 0 24 24"
        >
            {list}
        </svg>
    )
}

// import component
export const Button = (state: ButtonProps): JSX.Element => {
    const k = state.uKey ? state.uKey : generateRandomString(8)
    return (
        <button
            key={k}
            className={
                'rounded border focus:outline-none focus:ring-4 '
                + sizes(state.size) + colors(state.color)
                + (state.extension ? state.extension : '')
            }
            id="source-editor-update-button"
            onClick={() => state.onClick()}
        >
            {state.icon ? Icons(state.icon) : ''}
            {state.text}
        </button>
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

export default Button
