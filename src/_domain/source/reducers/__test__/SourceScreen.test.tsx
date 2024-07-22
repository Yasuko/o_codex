import React from "react"
import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Provider } from "react-redux"
import { createStore } from '../../../../_store/configureStore'
const store = createStore()

import SourceScreenComponent from "./SourceScreen.component"

describe("DocumentScreen Reducerのテスト", () => {
    test(
        "homeの切り替え試験",
        () => {
            render(<Provider store={store}><SourceScreenComponent/></Provider>)
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
            render(<Provider store={store}><SourceScreenComponent/></Provider>)
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
        "editの切り替え試験",
        () => {
            render(<Provider store={store}><SourceScreenComponent/></Provider>)
            const input = document.getElementById("change-edit") as HTMLButtonElement
            const _v = document.getElementById("edit") as HTMLDivElement
            const _h = document.getElementById("home") as HTMLDivElement

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('true')
            expect(_h.innerHTML).toEqual('false')

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('false')
        }
    )
    test(
        "removeの切り替え試験",
        () => {
            render(<Provider store={store}><SourceScreenComponent/></Provider>)
            const input = document.getElementById("change-remove") as HTMLButtonElement
            const _v = document.getElementById("remove") as HTMLDivElement
            const _h = document.getElementById("home") as HTMLDivElement

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('true')
            expect(_h.innerHTML).toEqual('false')

            fireEvent.click(input)
            expect(_v.innerHTML).toEqual('false')
        }
    )
    test(
        "viewの切り替え試験",
        () => {
            render(<Provider store={store}><SourceScreenComponent/></Provider>)
            const input = document.getElementById("change-view") as HTMLButtonElement
            const _v = document.getElementById("view") as HTMLDivElement
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
            render(<Provider store={store}><SourceScreenComponent/></Provider>)
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
            render(<Provider store={store}><SourceScreenComponent/></Provider>)
            const input = document.getElementById("reset-button") as HTMLButtonElement
            const _h = document.getElementById("home") as HTMLDivElement
            const _n = document.getElementById("new") as HTMLDivElement
            const _e = document.getElementById("edit") as HTMLDivElement
            const _r = document.getElementById("remove") as HTMLDivElement
            const _v = document.getElementById("view") as HTMLDivElement
            const _i = document.getElementById("import") as HTMLDivElement

            fireEvent.click(input)
            expect(_h.innerHTML).toEqual('true')
            expect(_n.innerHTML).toEqual('false')
            expect(_e.innerHTML).toEqual('false')
            expect(_r.innerHTML).toEqual('false')
            expect(_v.innerHTML).toEqual('false')
            expect(_i.innerHTML).toEqual('false')
        }
    )
})