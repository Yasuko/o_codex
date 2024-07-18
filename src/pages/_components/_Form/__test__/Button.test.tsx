import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"

import Button from "../Button"


describe("ボタンコンポーネント試験", () => {

    test(
        "小サイズのボタンが表示される",
        () => {
            render(<Button text="button" size="small" color="default" onClick={() => console.log()} />)
            expect(screen.getByRole("button")).toBeInTheDocument()
        }
    )

    test(
        "中サイズのボタンが表示される",
        () => {
            render(<Button text="button" size="middle" color="default" onClick={() => console.log()} />)
            expect(screen.getByRole("button")).toBeInTheDocument()
        }
    )

    test(
        "大サイズのボタンが表示される",
        () => {
            render(<Button text="button" size="large" color="default" onClick={() => console.log()} />)
            expect(screen.getByRole("button")).toBeInTheDocument()
        }
    )

    test(
        "onClickが呼ばれる",
        () => {
            const onClick = vi.fn()
            render(<Button text="button" size="small" color="default" onClick={onClick} />)
            screen.getByRole("button").click()
            expect(onClick).toHaveBeenCalled()
        }
    )
})