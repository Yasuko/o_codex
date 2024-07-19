import React from "react"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import TextBox2 from "../TextBox2"


describe("テキストボックスType2コンポーネントテスト", () => {

    test(
        "テキストBOXType2が表示される",
        () => {
            const { container } = render(
                <TextBox2
                    label="test"
                    text="test"
                    id="text-box"
                    extension="w-full px-3"
                />
            )
            const preElement = container.querySelector('pre')
            expect(preElement).toBeInTheDocument()
        }
    )
    test(
        "テキストが表示される",
        () => {
            const expectedText = "1\\asda+*:;/,as@page{margin:0}body{margin:0}"
            const { getByText } = render(
                <TextBox2
                    label="test"
                    text={expectedText}
                    extension="w-full px-3"
                />)
            const preElement = getByText(expectedText, { selector: 'pre' })

            expect(preElement).toBeInTheDocument()
            expect(preElement.tagName).toBe('PRE')
            expect(preElement.textContent).toBe(expectedText)
        }
    )

})