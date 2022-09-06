export default function Estilo(props) {
    // let cor = "black";
    // if (props.numero >= 0) {
    //     cor = "blue";
    // } else {
    //     cor = "#F00"
    // }
        
    return (
        <>
            <h1 style={{
                backgroundColor: props.numero >=7 ? "blue" : "red",
                color: "#FFF",
                textAlign: props.direita ? "right" : "left"
            }}>
                Valor: {props.numero}
            </h1>

            <h2 className={props.numero >= 0 ? "verde" : "cinza"}>
                Valor  condicional (classe): {props.numero}
            </h2>
        </>
    )
}
