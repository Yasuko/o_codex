import React from "react"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import TextAreaBox from "../TextAreaBox"


describe("テキストボックスType2コンポーネントテスト", () => {

    test(
        "テキストBOXType2が表示される",
        () => {
            const { container } = render(
                <TextAreaBox
                    label="test"
                    text="test"
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
                <TextAreaBox
                    label="test"
                    text={expectedText}
                />)
            const preElement = getByText(expectedText, { selector: 'pre' })

            expect(preElement).toBeInTheDocument()
            expect(preElement.tagName).toBe('PRE')
            expect(preElement.textContent).toBe(expectedText)
        }
    )

})