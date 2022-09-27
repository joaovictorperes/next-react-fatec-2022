export default function init(props) {
    return (
        <>
            <h2>Filho</h2>
            <button onClick={() => props.funcao(4,6)}>Somar</button>
        </>
    )
}