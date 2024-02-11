import { useState } from "react"

export const ItemList = ({ item, setItemsArr }) => {



    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            width: "70%",
            margin: "0px auto"
        }}>
            {
                item?.map((singleItem, indx) => (
                    <Item
                        itemList={item}
                        setItemsArr={setItemsArr}
                        haroon={singleItem}
                        number={indx}
                    />
                ))
            }
            {/* <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item /> */}
        </div>
    )
}

const Item = ({ haroon, number, setItemsArr, itemList }) => {
    const packedHandler = (packingValue, itemNumber) => {   //false
        const merayItems = [...itemList]  
        merayItems[number].packed = !packingValue  //true
        setItemsArr(merayItems)
    }
    return (
        <div style={{
            display: "flex",
            gap: "10px"
        }}>
            <input type="checkbox" checked={haroon.packed} onChange={() => packedHandler(haroon.packed, number)} />
            <p style={{
                color: "#dbc69b",
                textDecoration: haroon.packed ? "line-through" : "none"
            }}>
                {
                    `${haroon.quantity} ${haroon.name}`
                }
            </p>
            <p>X</p>
        </div>
    )
}