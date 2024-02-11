import { BottomButtons } from "../BottomButtons"
import { ItemList } from "../ItemList"

export const PackagingList = ({ item, setItemsArr }) => {
    console.log(item, "=====>>> item")
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "330px",
            alignItems: "center",
            backgroundColor: "#4c3423"
        }}>
            <ItemList item={item} setItemsArr={setItemsArr} />
            <BottomButtons />
        </div>
    )
}