export default function Data({ level }) {

    const differentTexts = [
        "Learn JavaScript",
        "Learn ReactJS",
        "Paisa hi Paisa hoga"
    ]




    return (
        <div style={{ textAlign: 'center' }}>
            {differentTexts[level - 1]}
        </div>
    )
}