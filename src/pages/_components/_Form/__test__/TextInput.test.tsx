import React, { ReactElement } from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"

import TextInput from "../TextInput"

const setup = (jsx: ReactElement, element: string) => {
    return {
        user: userEvent.setup(),
        ...render(jsx),
        input: screen.getByRole<HTMLInputElement>(element),
    }
}

describe("インプットコンポーネントテスト", () => {

    test(
        "テキスト入力が表示される",
        () => {
            setup(
                <TextInput
                    label="text"
                    type="text"
                    placeholder=""
                    defaultValue=""
                    extension="w-full px-3"
                    onChange={() => console.log()}
                />,
                'textbox'
            )
            expect(screen.getByRole<HTMLInputElement>("textbox")).toBeInTheDocument()
        }
    )
    test(
        "パスワード入力が表示される",
        () => {
            const onChange = vi.fn((e) => e.target.value)
            render(
                <TextInput
                    label="password"
                    type="password"
                    id="password"
                    placeholder=""
                    defaultValue=""
                    extension="w-full px-3"
                    onChange={onChange}
                />
            )
            const input = screen.getByLabelText<HTMLInputElement>("password")
            fireEvent.change(input, {target: {value: "test"}})
            console.log(input.value)
            expect(input.value === "test").toBeTruthy()
            expect(onChange).toHaveNthReturnedWith(1, "test")
        }
    )
    test(
        "onChangeが呼ばれる",
        () => {
            const onChange = vi.fn()
            render(
                <TextInput
                    label="text"
                    type="text"
                    placeholder=""
                    defaultValue=""
                    extension="w-full px-3"
                    onChange={onChange}
                />)
            const input = screen.getByRole<HTMLInputElement>("textbox")

            fireEvent.change(input, {target: {value: "test"}})
            expect(onChange).toHaveBeenCalled()
        }
    )

})