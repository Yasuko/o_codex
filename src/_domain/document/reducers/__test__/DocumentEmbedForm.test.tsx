import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Provider } from "react-redux"
import { createStore } from '../../../../_store/configureStore'
const store = createStore()

import DocumentEmbedFormComponent from "./DocumentEmbedForm.component"

describe("DocumentEmbedForm Reducerのテスト", () => {
    test(
        "テキスト入力が表示される",
        () => {
            render(<Provider store={store}><DocumentEmbedFormComponent/></Provider>)
            const f = document.getElementById("document-input") as HTMLInputElement
            f.value = JSON.stringify(["test"])
            expect(document.getElementById("document")).toEqual('test')
        }
    )
})