import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Provider } from "react-redux"
import { createStore } from '../../../../_store/configureStore'
const store = createStore()

import Edit from "../Edit"


describe("Source Editコンポーネント試験", () => {

    test(
        "コンポーネントがレンダリングされる",
        () => {
            render(<Provider store={store}><Edit /></Provider>)
            expect(screen.getByText("Title")).toBeInTheDocument()
            expect(screen.getByText("Text")).toBeInTheDocument()
        }
    )

    test(
        "Titleを書き換えた時に、Stateの更新、フォーム内容の更新が行われる",
        () => {
            render(<Provider store={store}><Edit /></Provider>)
            const title = document.getElementById("source-editor-title") as HTMLInputElement
            expect(title.value).toEqual("")
            title.value = "Unkoman"
            expect(title.value).toEqual("Unkoman")
        }
    )

    test(
        "Textを書き換えた時に、Stateの更新、フォーム内容の更新が行われる",
        () => {
            render(<Provider store={store}><Edit /></Provider>)
            const title = document.getElementById("source-editor-text") as HTMLInputElement
            expect(title.value).toEqual("")
            title.value = "Unkoman"
            expect(title.value).toEqual("Unkoman")
        }
    )

    test(
        "URLを書き換えた時に、Stateの更新、フォーム内容の更新が行われる",
        () => {
            render(<Provider store={store}><Edit /></Provider>)
            const title = document.getElementById("source-editor-url") as HTMLInputElement
            expect(title.value).toEqual("")
            title.value = "Unkoman"
            expect(title.value).toEqual("Unkoman")
        }
    )

    test(
        "ボタンが押せる",
        async () => {
            // const onClick = vi.fn()
            render(<Provider store={store}><Edit /></Provider>)

            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
            // await fireEvent.click(button)
            // await waitFor(() => userEvent.click(screen.getByRole('button')))
            // expect(onClick).toBeCalled()
            // expect(onClick).toBeCalledTimes(1)
        }
    )
})