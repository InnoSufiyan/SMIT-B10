import { useEffect, useState } from "react"
import { useShortWork } from "../CustomHook/useShortWork"

export default function CustomHookPractice() {

    const { jobs, categories } = useShortWork()

    return (
        <>
            Main hun ek custom hook practice component
        </>
    )
}

