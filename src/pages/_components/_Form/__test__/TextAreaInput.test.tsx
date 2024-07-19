import React, { ReactElement } from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"

import TextAreaInput from "../TextAreaInput"

const setup = (jsx: ReactElement, element: string) => {
    return {
        user: userEvent.setup(),
        ...render(jsx),
        input: screen.getByRole<HTMLInputElement>(element),
    }
}

describe("テキストエリアコンポーネントテスト", () => {

    test(
        "テキストエリアが表示される",
        () => {
            render(
                <TextAreaInput
                    label="text"
                    placeholder=""
                    defaultValue=""
                    extension="w-full px-3"
                    rows={5}
                    cols={30}
                    onChange={() => console.log()}
                />)
            expect(screen.getByRole<HTMLInputElement>("textbox")).toBeInTheDocument()
        }
    )
    test(
        "onChangeが呼ばれる",
        () => {
            const onChange = vi.fn()
            const {input} = setup(
                <TextAreaInput
                    label="text"
                    placeholder=""
                    defaultValue=""
                    extension="w-full px-3"
                    rows={5}
                    cols={30}
                    onChange={onChange}
                />, 'textbox')

            fireEvent.change(input, {target: {value: "test"}})
            console.log(input.value)
            expect(onChange).toHaveBeenCalled()
        }
    )
    test(
        "onKeyDownが呼ばれる",
        () => {
            const onKeyDown = vi.fn()
            const {input} = setup(
                <TextAreaInput
                    label="text"
                    placeholder=""
                    defaultValue=""
                    extension="w-full px-3"
                    rows={5}
                    cols={30}
                    onKeyDown={onKeyDown}
                />, 'textbox')

            fireEvent.keyDown(input, {key: "Enter"})
            expect(onKeyDown).toHaveBeenCalled()
        }
    )

})