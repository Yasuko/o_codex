import React from 'react'
import { useDispatch } from 'react-redux'

export type TokenFormPropsType = {
    toDispatch: string
} 

export const TokenForm = (state: TokenFormPropsType): JSX.Element => {
    const dispatch = useDispatch()

    return (
    <div className='
            w-[100vw] h-[100vh] absolute top-0 left-0
            justify-center items-center flex
            bg-gray-800 opacity-70'>
        <div className="w-[600px] opacity-100">
            <div className="">
                <div className="relative">
                    <label
                        htmlFor="large-input"
                        className="
                            block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                OPEN AI TOKEN
                    </label>
                    <input
                        type="search"
                        id="input-token"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button
                        type="button"
                        className="
                            text-white absolute end-2.5 bottom-2.5
                            bg-blue-700 hover:bg-blue-800
                            focus:ring-4 focus:outline-none focus:ring-blue-300
                            font-medium
                            rounded-lg text-sm px-4 py-2
                            dark:bg-blue-600 dark:hover:bg-blue-700
                            dark:focus:ring-blue-800"
                        onClick={() => {
                            const token = document.getElementById('input-token') as HTMLInputElement
                            dispatch({
                                type    : 'TokenAction/setToken',
                                payload : {
                                    token   : token.value,
                                    toDispatch  : state.toDispatch
                                }
                            })
                            token.value = ''
                        }}>Save Browser
                    </button>
                </div>
                <span className='m-10 text-center'>
                    <p>OpenAIAPIを呼び出すトークンを入力して下さい。</p>
                    <p>入力されたトークンはブラウザ内で保存され</p>
                    <p>外部に送信、保存される事はありません。</p>
                </span>
            </div>
        </div>
    </div>
    )
}

export default TokenForm