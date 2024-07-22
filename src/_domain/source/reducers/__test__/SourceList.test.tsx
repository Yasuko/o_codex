import React from "react"
import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Provider } from "react-redux"
import { createStore } from '../../../../_store/configureStore'
const store = createStore()

import SourceListComponent from "./SourceList.component"

const add_test = {
    title: 'test1',
    text: 'test1',
    url: 'http://example.com',
}

const update_test = {
    title: 'test2',
    text: 'test2',
    url: 'http://example_shakenokawa.com',
}

describe("DocumentEmbedVList Reducerのテスト", () => {
    test(
        "sourceデータの追加",
        () => {
            render(<Provider store={store}><SourceListComponent/></Provider>)
            const input = document.getElementById("set-add") as HTMLInputElement
            fireEvent.change(input, {
                target: {
                    value: JSON.stringify(add_test)
                }
            })
            const _v = document.getElementById("sources") as HTMLDivElement
            expect(_v.innerHTML).toEqual(JSON.stringify([add_test]))
        }
    )
    test(
        "sourceデータの更新",
        () => {
            render(<Provider store={store}><SourceListComponent/></Provider>)
            const input = document.getElementById("set-update") as HTMLInputElement
            fireEvent.change(input, {target: {
                            value: JSON.stringify({
                                ...update_test,
                                index: 0
                            })
                        }})
            const _v = document.getElementById("sources") as HTMLDivElement
            expect(_v.innerHTML).toEqual(JSON.stringify([update_test]))
        }
    )
    test(
        "sourceデータの削除",
        () => {
            render(<Provider store={store}><SourceListComponent/></Provider>)

            const input = document.getElementById("set-remove") as HTMLInputElement
            const index = { index: 0 }

            fireEvent.change(input, {target: {value: JSON.stringify(index)}})
            const _v = document.getElementById("sources") as HTMLDivElement
            expect(_v.innerHTML).toEqual(JSON.stringify([]))
        }
    )
    test(
        "pageの更新が出来る",
        () => {
            render(<Provider store={store}><SourceListComponent/></Provider>)
            const input = document.getElementById("set-page") as HTMLInputElement
            fireEvent.change(input, {target: {value: 3}})

            const _v = document.getElementById("page") as HTMLDivElement
            expect(_v.innerHTML).toEqual(String(3))
        }
    )
    test(
        "max-listの更新が出来る",
        () => {
            render(<Provider store={store}><SourceListComponent/></Provider>)
            const input = document.getElementById("set-max-list") as HTMLInputElement
            fireEvent.change(input, {target: {value: 3}})

            const _v = document.getElementById("max_list") as HTMLDivElement
            expect(_v.innerHTML).toEqual(String(3))
        }
    )
    test(
        "Reducerのリセットができる",
        () => {
            render(<Provider store={store}><SourceListComponent/></Provider>)
            const input = document.getElementById("reset-button") as HTMLButtonElement
            fireEvent.click(input)
            const _v = document.getElementById("sources") as HTMLDivElement
            expect(_v.innerHTML).toEqual(JSON.stringify([]))
        }
    )
})