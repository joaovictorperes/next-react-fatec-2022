export default function init(props) {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <h2>{props.nome}</h2>
            <h1>{props.sobrenome}</h1>
        </div>
    )
}