import React from 'react'
import { useDispatch } from 'react-redux'


const Header = (): JSX.Element => {
    const dispatch = useDispatch()
    return (
    <header className="
        flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-0 dark:bg-gray-800">
        <nav className="
            max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
            <div id="navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
                <div className="flex flex-col gap-5 mt-2 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
                    <div
                        className="
                            text-xl
                            font-medium text-blue-500
                            dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                            cursor-pointer
                            "
                        onClick={() => {
                            dispatch({
                                type: 'AdminScreen/document'
                            })
                        }}>
                        document
                    </div>
                    <div
                        className="
                            text-xl font-medium text-blue-500
                            dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                            cursor-pointer
                            "
                        onClick={() => {
                            dispatch({
                                type: 'AdminScreen/source'
                            })
                        }}>
                        source
                    </div>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default Header
