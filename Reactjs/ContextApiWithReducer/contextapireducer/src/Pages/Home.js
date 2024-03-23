import Component1 from "../Components/Component1";
import Component2 from "../Components/Component2";

export default function Home() {
    return (
        <div style={{
            border: "2px solid black"
        }}>
            <h1>
                Main hun home
            </h1>
            <Component1 />
            <Component2 />
        </div>
    )
}