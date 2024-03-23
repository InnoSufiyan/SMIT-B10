import { memo } from "react"

const Counter2 = memo(({ counter2 }) => {

    console.log(counter2, "===>> counter2 peda huwa yeh chala")



    //for loop 100000

    return (
        <>
            <h1>counter2: {counter2}</h1>
        </>
    )
})

export default Counter2