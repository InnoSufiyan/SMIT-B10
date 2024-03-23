import { useContext } from "react"
import { MeriContext } from "../App"

export default function Component1() {
    const { state, dispatch } = useContext(MeriContext)
    const { dataForComponent1, setDataForComponent1 } = state
    return (
        <>
            <h1>{dataForComponent1}</h1>
            <button onClick={() => dispatch({
                type: 'component1',
                payload: 'data changed for component 1'
            })}>Click Me to change data</button>
        </>
    )
}