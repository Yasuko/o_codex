import React from "react"
import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Provider } from "react-redux"
import { createStore } from '../../../../_store/configureStore'
const store = createStore()

import DocumentEmbedFormComponent from "./DocumentEmbedForm.component"

describe("DocumentEmbedForm Reducerのテスト", () => {
    test(
        "documentの登録ができる",
        () => {
            render(<Provider store={store}><DocumentEmbedFormComponent/></Provider>)
            const input = document.getElementById("document-input") as HTMLInputElement
            fireEvent.change(input, {target: {value: JSON.stringify(["test"])}})

            const _v = document.getElementById("document") as HTMLDivElement
            expect(_v.innerHTML).toEqual('test')
        }
    )
    test(
        "embeddingの登録ができる",
        () => {
            render(<Provider store={store}><DocumentEmbedFormComponent/></Provider>)
            const input = document.getElementById("embedding-input") as HTMLInputElement
            fireEvent.change(input, {target: {value: JSON.stringify(['test1','test2','test3'])}})

            const _v = document.getElementById("embedding") as HTMLDivElement
            expect(_v.innerHTML).toEqual('test1')
        }
    )
    test(
        "embedding_nの登録ができる",
        () => {
            render(<Provider store={store}><DocumentEmbedFormComponent/></Provider>)
            const input = document.getElementById("embedding_n-input") as HTMLInputElement
            fireEvent.change(input, {target: {value: JSON.stringify(['test1','test2','test3'])}})

            const _v = document.getElementById("embedding_n") as HTMLDivElement
            expect(_v.innerHTML).toEqual('test1')
        }
    )
    test(
        "keyの登録ができる",
        () => {
            render(<Provider store={store}><DocumentEmbedFormComponent/></Provider>)
            const input = document.getElementById("key-input") as HTMLInputElement
            fireEvent.change(input, {target: {value: 'test1'}})

            const _v = document.getElementById("key-view") as HTMLDivElement
            expect(_v.innerHTML).toEqual('test1')
        }
    )
    test(
        "indexの登録ができる",
        () => {
            render(<Provider store={store}><DocumentEmbedFormComponent/></Provider>)
            const input = document.getElementById("index-input") as HTMLInputElement
            fireEvent.change(input, {target: {value: '1'}})

            const _v = document.getElementById("index-view") as HTMLDivElement
            expect(_v.innerHTML).toEqual('1')
        }
    )
})