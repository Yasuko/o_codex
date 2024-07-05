import React from 'react'
import { Link } from 'react-router-dom'

const Header = (): JSX.Element => {
    return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-gray-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
            <Link
                to="/"
                className="sm:order-1 flex-none text-xl font-semibold dark:text-white">
                CODEX
            </Link>
            <div id="navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
                <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
                    <Link
                        to="/Admin"
                        className="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        Admin
                    </Link>

                </div>
            </div>
        </nav>
    </header>
    )
}

export default Header
