import React from "react"
import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Provider } from "react-redux"
import { createStore } from '../../../../_store/configureStore'
const store = createStore()

import DocumentTestListComponent from "./DocumentTextList.component"

const add_test = {
    title: 'test',
    url: 'http://example.com',
    loading: false,
    document: ['test'],
    embedding: false,
    key: 'unko',
    chunk: [['test']]
}

const update_test = {
    title: 'test2',
    url: 'http://example_forever.com',
    loading: true,
    document: ['test2'],
    embedding: true,
    key: 'unko2',
    chunk: [['test2']]

}

describe("DocumentTextList Reducerのテスト", () => {
    test(
        "textデータの追加",
        () => {
            render(<Provider store={store}><DocumentTestListComponent/></Provider>)
            const input = document.getElementById("add-text") as HTMLInputElement
            fireEvent.change(input, {
                target: {
                    value: JSON.stringify(add_test)
                }
            })
            const _v = document.getElementById("texts") as HTMLDivElement
            expect(_v.innerHTML).toEqual(JSON.stringify([add_test]))
        }
    )
    test(
        "textデータの更新",
        () => {
            render(<Provider store={store}><DocumentTestListComponent/></Provider>)
            const input = document.getElementById("update-text") as HTMLInputElement
            fireEvent.change(input, {target: {
                            value: JSON.stringify({
                                ...update_test,
                                index: 0
                            })
                        }})
            const _v = document.getElementById("texts") as HTMLDivElement
            expect(_v.innerHTML).toEqual(JSON.stringify([update_test]))
        }
    )
    test(
        "textデータの削除",
        () => {
            render(<Provider store={store}><DocumentTestListComponent/></Provider>)

            const input = document.getElementById("remove-text") as HTMLInputElement
            const index = { index: 0 }

            fireEvent.change(input, {target: {value: JSON.stringify(index)}})
            const _v = document.getElementById("texts") as HTMLDivElement
            expect(_v.innerHTML).toEqual(JSON.stringify([]))
        }
    )
    test(
        "Reducerのリセットができる",
        () => {
            render(<Provider store={store}><DocumentTestListComponent/></Provider>)
            const input = document.getElementById("reset-button") as HTMLButtonElement
            fireEvent.click(input)
            const _v = document.getElementById("texts") as HTMLDivElement
            expect(_v.innerHTML).toEqual(JSON.stringify([]))
        }
    )
})