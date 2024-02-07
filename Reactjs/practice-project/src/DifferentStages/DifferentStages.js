import { useState } from "react";
import Buttons from "./Buttons.js";
import Data from "./Data.js";
import Stages from "./Stages.js";

export default function DifferentStages() {

    const [level, setLevel] = useState(1)   //3
    const [agarDark, setAgarDark] = useState(false)

    function darkFoo() {
        setAgarDark(true)
    }
    function lightFoo() {
        setAgarDark(false)
        
    }
    return (
        <div style={{ height: '100vh', backgroundColor: agarDark ? "black" : "purple" }}>
            <button onClick={darkFoo}>Dark</button>
            <button onClick={lightFoo}>Light</button>
            <div style={differentStagesCSS}>
                <Stages level={level} />
                <Data level={level} />
                <Buttons setLevel={setLevel} level={level} />
            </div>
        </div>
    )
}

const differentStagesCSS = { height: "50vh", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }