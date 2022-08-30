export default function init(props){
    //props.numero++ // não podemos alterar uma propriedade de forma direta
    return (
        <>
            <h1>{props.numero + 1}</h1>
            <h1>{incrementar(props.numero)}</h1>
        </>
    )
}

function incrementar(numero) {
    console.log(numero++)
    return numero
}