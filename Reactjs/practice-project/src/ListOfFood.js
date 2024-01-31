import { useState } from "react";
import Food from "./Food";

export default function ListOfFood() {

    const [foodList, setFoodList] = useState([{
        src: "",
        name: "biryani",
        description: "adasdsadds",
        remainingItems: "20"
    }, {
        src: "",
        name: "Korma",
        description: "adasdsadds",
        remainingItems: "20"
    }, {
        src: "",
        name: "daal chawal",
        description: "adasdsadds",
        remainingItems: "20"
    }, {
        src: "",
        name: "tikka",
        description: "adasdsadds",
        remainingItems: "20"
    }, {
        src: "",
        name: "chinese",
        description: "adasdsadds",
        remainingItems: "0"
    }, {
        src: "",
        name: "chargha",
        description: "adasdsadds",
        remainingItems: "20"
    }, {
        src: "",
        name: "sabzi",
        description: "adasdsadds",
        remainingItems: "20"
    }, {
        src: "",
        name: "pilaow",
        description: "adasdsadds",
        remainingItems: "0"
    }, {
        src: "",
        name: "Mandi",
        description: "adasdsadds",
        remainingItems: "20"
    }, {
        src: "",
        name: "tinday",
        description: "adasdsadds",
        remainingItems: "20"
    }])

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                {foodList.map((food) => (
                    <div style={{ width: "50%" }}>
                        <Food foodDetail={food} />
                    </div>
                ))}
            </div>
        </>
    )
}