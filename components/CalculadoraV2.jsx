export default function init(props) {
    let resultado = 0;
    let operador = ""
    if (props.soma) {
        resultado = soma(props.num1,props.num2);
        operador = "+"
    } else if (props.subtracao) {
        resultado = subtracao(props.num1,props.num2)
        operador = "-"
    } else if (props.multiplicacao) {
        resultado = multiplicacao(props.num1,props.num2)
        operador = "x"
    } else if (props.divisao) {
        if (props.num2 != 0) {
            resultado = divisao(props.num1,props.num2)
            operador = "/"
        } else {
            return (
                <>
                    <h1>Divisão por zero</h1>
                </>
            )
        }
    } else {
        return (
            <>
                <h1>Operação indefinida</h1>
            </>
        )
    }

    return (
        <>
            <h1>Resultado</h1>
            <h2>{props.num1} {operador} {props.num2} = {resultado}</h2>
        </>
    )
}

function soma(a,b) {
    return a + b
}

function subtracao(a,b) {
    return a - b
}

function multiplicacao(a,b) {
    return a * b
}

function divisao(a,b) {
    return a / b
}