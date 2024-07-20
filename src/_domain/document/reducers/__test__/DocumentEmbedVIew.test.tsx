import React from "react"
import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Provider } from "react-redux"
import { createStore } from '../../../../_store/configureStore'
const store = createStore()

import DocumentEmbedFormComponent from "./DocumentEmbedView.component"

describe("DocumentEmbedView Reducerのテスト", () => {
    test(
        "documentの登録ができる",
        () => {
            render(<Provider store={store}><DocumentEmbedFormComponent/></Provider>)
            const input = document.getElementById("document-input") as HTMLInputElement
            const _v = document.getElementById("document") as HTMLDivElement
            fireEvent.change(input, {target: {value: "test"}})
            expect(_v.innerHTML).toEqual('test')
        }
    )
    test(
        "embeddingの登録ができる",
        () => {
            render(<Provider store={store}><DocumentEmbedFormComponent/></Provider>)
            const input = document.getElementById("embedding-input") as HTMLInputElement
            const _v = document.getElementById("embedding") as HTMLDivElement
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