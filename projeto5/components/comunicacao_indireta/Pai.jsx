import Filho from "./Filho"

export default function init() {
    function calcula(valor1, valor2) {
        const x = valor1 + valor2
        alert(x)
    }

    return (
        <>
            <h1>Pai</h1>
            <Filho funcao={calcula}/>
        </>
    )
}