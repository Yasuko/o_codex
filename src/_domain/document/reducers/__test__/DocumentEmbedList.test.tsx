import React from "react"
import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Provider } from "react-redux"
import { createStore } from '../../../../_store/configureStore'
const store = createStore()

import DocumentEmbedListComponent from "./DocumentEmbedList.component"

const add_test = {
    document: ['test'],
    embedding: [[['test']]],
    embedding_n: [[['test']]],
    key: 'unko'
}

const update_test = {
    document: ['test2'],
    embedding: [[['test2']]],
    embedding_n: [[['test2']]],
    key: 'unko2'
}

describe("DocumentEmbedVList Reducerのテスト", () => {
    test(
        "embedデータの追加",
        () => {
            render(<Provider store={store}><DocumentEmbedListComponent/></Provider>)
            const input = document.getElementById("embed-add-input") as HTMLInputElement
            fireEvent.change(input, {
                target: {
                    value: JSON.stringify(add_test)
                }
            })
            const _v = document.getElementById("embeds") as HTMLDivElement
            expect(_v.innerHTML).toEqual(JSON.stringify([add_test]))
        }
    )
    test(
        "embedデータの更新",
        () => {
            render(<Provider store={store}><DocumentEmbedListComponent/></Provider>)
            const input = document.getElementById("embed-update-input") as HTMLInputElement
            fireEvent.change(input, {target: {
                            value: JSON.stringify({
                                ...update_test,
                                index: 0
                            })
                        }})
            const _v = document.getElementById("embeds") as HTMLDivElement
            expect(_v.innerHTML).toEqual(JSON.stringify([update_test]))
        }
    )
    test(
        "embedデータの削除",
        () => {
            render(<Provider store={store}><DocumentEmbedListComponent/></Provider>)

            const input = document.getElementById("embed-remove-input") as HTMLInputElement
            const index = { index: 0 }

            fireEvent.change(input, {target: {value: JSON.stringify(index)}})
            const _v = document.getElementById("embeds") as HTMLDivElement
            expect(_v.innerHTML).toEqual(JSON.stringify([]))
        }
    )
    test(
        "Reducerのリセットができる",
        () => {
            render(<Provider store={store}><DocumentEmbedListComponent/></Provider>)
            const input = document.getElementById("reset-button") as HTMLButtonElement
            fireEvent.click(input)
            const _v = document.getElementById("embeds") as HTMLDivElement
            expect(_v.innerHTML).toEqual(JSON.stringify([]))
        }
    )
})