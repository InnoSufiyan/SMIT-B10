export default function Split({ name = 'Haroon' }) {
    return (
        <>
            <p style={{marginBottom: '20px'}}>Split a bill with {name}</p>
            <div>
                <p>Bill Value</p>
                <input type="number" placeholder="10" />
            </div>
            <div>
                <p>Your Expense</p>
                <input type="number" placeholder="10" />
            </div>
            <div>
                <p>{name} Expense</p>
                <input type="number" placeholder="10" />
            </div>
            <div>
                <p>Who is paying the bill ?</p>
                <select>
                    <option>You</option>
                    <option>{name}</option>
                </select>
            </div>
            <button style={{marginTop: "20px"}}>Split Bill</button>
        </>
    )
}