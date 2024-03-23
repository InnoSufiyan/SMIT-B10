import { useContext } from "react"
import { MeriContext } from "../App"

export default function Component2() {
    const {dataForComponent2} = useContext(MeriContext)
    return (
        <h1>{dataForComponent2}</h1>
    )
}