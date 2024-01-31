export default function Food({ foodDetail }) {
    console.log(foodDetail, "====>> foodDetail")
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: '2px solid black', gap: '10px' }}>
            <div style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden' }}>
                <img width={'100%'} src="https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg" />
            </div>
            <h4>{foodDetail.name}</h4>
            <p>{foodDetail.description}</p>
            <p>{foodDetail.remainingItems === "0" ? "Sold Out" : foodDetail.remainingItems}</p>
        </div>
    )
}