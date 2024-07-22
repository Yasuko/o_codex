import React from "react"
import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Provider } from "react-redux"
import { createStore } from '../../../../_store/configureStore'
const store = createStore()

import DocumentTextFormComponent from "./DocumentTextForm.component"

describe("DocumentTextForm Reducerのテスト", () => {
    test(
        "urlの登録ができる",
        () => {
            render(<Provider store={store}><DocumentTextFormComponent/></Provider>)
            const input = document.getElementById("set-url") as HTMLInputElement
            fireEvent.change(input, {target: {value: 'http://example.com'}})

            const _v = document.getElementById("url") as HTMLDivElement
            expect(_v.innerHTML).toEqual('http://example.com')
        }
    )
    test(
        "titleの登録ができる",
        () => {
            render(<Provider store={store}><DocumentTextFormComponent/></Provider>)
            const input = document.getElementById("set-title") as HTMLInputElement
            fireEvent.change(input, {target: {value: 'test1'}})

            const _v = document.getElementById("title") as HTMLDivElement

            expect(_v.innerHTML).toEqual('test1')
        }
    )
    test(
        "loadingの更新が出来る",
        () => {
            render(<Provider store={store}><DocumentTextFormComponent/></Provider>)
            const input = document.getElementById("set-loading") as HTMLInputElement
            fireEvent.change(input, {target: {value: true}})

            const _v = document.getElementById("loading") as HTMLDivElement
            expect(_v.innerHTML).toEqual("true")
        }
    )
    test(
        "Documentの登録ができる",
        () => {
            render(<Provider store={store}><DocumentTextFormComponent/></Provider>)
            const input = document.getElementById("set-document") as HTMLInputElement
            fireEvent.change(input, {target: {value: JSON.stringify(['test1'])}})

            const _v = document.getElementById("document") as HTMLDivElement
            expect(_v.innerHTML).toEqual('test1')
        }
    )
    test(
        "indexの登録ができる",
        () => {
            render(<Provider store={store}><DocumentTextFormComponent/></Provider>)
            const input = document.getElementById("set-index") as HTMLInputElement
            fireEvent.change(input, {target: {value: 1}})

            const _v = document.getElementById("index") as HTMLDivElement
            expect(_v.innerHTML).toEqual(String(1))
        }
    )
})