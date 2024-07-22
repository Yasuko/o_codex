import React from "react"
import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Provider } from "react-redux"
import { createStore } from '../../../../_store/configureStore'
const store = createStore()

import DocumentScreenComponent from "./DocumentScreen.component"

describe("DocumentScreen Reducerのテスト", () => {
    test(
        "homeの切り替え試験",
        () => {
            render(<Provider store={store}><DocumentScreenComponent/></Provider>)
            const input = document.getElementById("change-home") as HTMLButtonElement
            const _v = document.getElementById("home") as HTMLDivElement

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('false')

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('true')
        }
    )
    test(
        "newの切り替え試験",
        () => {
            render(<Provider store={store}><DocumentScreenComponent/></Provider>)
            const input = document.getElementById("change-new") as HTMLButtonElement
            const _v = document.getElementById("new") as HTMLDivElement
            const _h = document.getElementById("home") as HTMLDivElement

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('true')
            expect(_h.innerHTML).toEqual('false')

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('false')
        }
    )
    test(
        "textEditの切り替え試験",
        () => {
            render(<Provider store={store}><DocumentScreenComponent/></Provider>)
            const input = document.getElementById("change-text_edit") as HTMLButtonElement
            const _v = document.getElementById("text_edit") as HTMLDivElement
            const _h = document.getElementById("home") as HTMLDivElement

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('true')
            expect(_h.innerHTML).toEqual('false')

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('false')
        }
    )
    test(
        "textRemoveの切り替え試験",
        () => {
            render(<Provider store={store}><DocumentScreenComponent/></Provider>)
            const input = document.getElementById("change-text_remove") as HTMLButtonElement
            const _v = document.getElementById("text_remove") as HTMLDivElement
            const _h = document.getElementById("home") as HTMLDivElement

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('true')
            expect(_h.innerHTML).toEqual('false')

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('false')
        }
    )
    test(
        "embedEditの切り替え試験",
        () => {
            render(<Provider store={store}><DocumentScreenComponent/></Provider>)
            const input = document.getElementById("change-embed_edit") as HTMLButtonElement
            const _v = document.getElementById("embed_edit") as HTMLDivElement
            const _h = document.getElementById("home") as HTMLDivElement

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('true')
            expect(_h.innerHTML).toEqual('false')

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('false')
        }
    )
    test(
        "embedViewの切り替え試験",
        () => {
            render(<Provider store={store}><DocumentScreenComponent/></Provider>)
            const input = document.getElementById("change-embed_view") as HTMLButtonElement
            const _v = document.getElementById("embed_view") as HTMLDivElement
            const _h = document.getElementById("home") as HTMLDivElement

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('true')
            expect(_h.innerHTML).toEqual('false')

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('false')
        }
    )
    test(
        "embedRemoveの切り替え試験",
        () => {
            render(<Provider store={store}><DocumentScreenComponent/></Provider>)
            const input = document.getElementById("change-embed_remove") as HTMLButtonElement
            const _v = document.getElementById("embed_remove") as HTMLDivElement
            const _h = document.getElementById("home") as HTMLDivElement

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('true')
            expect(_h.innerHTML).toEqual('false')

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('false')
        }
    )
    test(
        "importの切り替え試験",
        () => {
            render(<Provider store={store}><DocumentScreenComponent/></Provider>)
            const input = document.getElementById("change-import") as HTMLButtonElement
            const _v = document.getElementById("import") as HTMLDivElement
            const _h = document.getElementById("home") as HTMLDivElement

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('true')
            expect(_h.innerHTML).toEqual('false')

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('false')
        }
    )
    test(
        "Reducerのリセットができる",
        () => {
            render(<Provider store={store}><DocumentScreenComponent/></Provider>)
            const input = document.getElementById("reset-button") as HTMLButtonElement
            const _h = document.getElementById("home") as HTMLDivElement
            const _n = document.getElementById("new") as HTMLDivElement
            const _te = document.getElementById("text_edit") as HTMLDivElement
            const _tr = document.getElementById("text_remove") as HTMLDivElement
            const _ee = document.getElementById("embed_edit") as HTMLDivElement
            const _ev = document.getElementById("embed_view") as HTMLDivElement
            const _er = document.getElementById("embed_remove") as HTMLDivElement
            const _i = document.getElementById("import") as HTMLDivElement

            fireEvent.click(input)
            expect(_h.innerHTML).toEqual('true')
            expect(_n.innerHTML).toEqual('false')
            expect(_te.innerHTML).toEqual('false')
            expect(_tr.innerHTML).toEqual('false')
            expect(_ee.innerHTML).toEqual('false')
            expect(_ev.innerHTML).toEqual('false')
            expect(_er.innerHTML).toEqual('false')
            expect(_i.innerHTML).toEqual('false')
        }
    )
})