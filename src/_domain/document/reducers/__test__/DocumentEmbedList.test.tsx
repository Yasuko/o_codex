import React from "react"
import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Provider } from "react-redux"
import { createStore } from '../../../../_store/configureStore'
const store = createStore()

import DocumentEmbedFormComponent from "./DocumentEmbedView.component"

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
            render(<Provider store={store}><DocumentEmbedFormComponent/></Provider>)
            const input = document.getElementById("embed-add-input") as HTMLInputElement
            const _v = document.getElementById("embeds") as HTMLDivElement
            fireEvent.change(input, {target: {value: JSON.stringify(add_test)}})
            expect(_v.innerHTML).toEqual(JSON.stringify(add_test))
        }
    )
    test(
        "embedデータの更新",
        () => {
            render(<Provider store={store}><DocumentEmbedFormComponent/></Provider>)
            const input = document.getElementById("embed-update-input") as HTMLInputElement
            const _v = document.getElementById("embeds") as HTMLDivElement
            fireEvent.change(input, {target: {value: JSON.stringify(['test1','test2','test3'])}})
            expect(_v.innerHTML).toEqual('test1')
        }
    )
    test(
        "embedding_nの登録ができる",
        () => {
            render(<Provider store={store}><DocumentEmbedFormComponent/></Provider>)
            const input = document.getElementById("embedding_n-input") as HTMLInputElement
            const _v = document.getElementById("embedding_n") as HTMLDivElement
            fireEvent.change(input, {target: {value: JSON.stringify(['test1','test2','test3'])}})
            expect(_v.innerHTML).toEqual('test1')
        }
    )
    test(
        "Reducerのリセットができる",
        () => {
            render(<Provider store={store}><DocumentEmbedFormComponent/></Provider>)
            const input = document.getElementById("reset-button") as HTMLButtonElement
            const _v = document.getElementById("document") as HTMLDivElement
            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('')
        }
    )
})