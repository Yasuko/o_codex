import React from "react"
import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Provider } from "react-redux"
import { createStore } from '../../../../_store/configureStore'
const store = createStore()

import SourceFormComponent from "./SourceForm.component"

describe("SourceForm Reducerのテスト", () => {
    test(
        "indexの登録ができる",
        () => {
            render(<Provider store={store}><SourceFormComponent/></Provider>)
            const input = document.getElementById("set-index") as HTMLInputElement
            fireEvent.change(input, {target: {value: 23}})

            const _v = document.getElementById("index") as HTMLDivElement
            expect(_v.innerHTML).toEqual(String(23))
        }
    )
    test(
        "titleの登録ができる",
        () => {
            render(<Provider store={store}><SourceFormComponent/></Provider>)
            const input = document.getElementById("set-title") as HTMLInputElement
            fireEvent.change(input, {target: {value: 'test1'}})

            const _v = document.getElementById("title") as HTMLDivElement
            expect(_v.innerHTML).toEqual('test1')
        }
    )
    test(
        "textの登録ができる",
        () => {
            render(<Provider store={store}><SourceFormComponent/></Provider>)
            const input = document.getElementById("set-text") as HTMLInputElement
            fireEvent.change(input, {target: {value: 'test1'}})

            const _v = document.getElementById("text") as HTMLDivElement
            expect(_v.innerHTML).toEqual('test1')
        }
    )
    test(
        "urlの登録ができる",
        () => {
            render(<Provider store={store}><SourceFormComponent/></Provider>)
            const input = document.getElementById("set-url") as HTMLInputElement
            fireEvent.change(input, {target: {value: 'http://example.com'}})

            const _v = document.getElementById("url") as HTMLDivElement
            expect(_v.innerHTML).toEqual('http://example.com')
        }
    )
})