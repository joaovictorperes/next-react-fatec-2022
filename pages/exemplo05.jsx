import Calculadora from "../components/Calculadora"

export default function init() {
    return (
        <>
            <Calculadora numero={99}></Calculadora>
            <Calculadora numero={50}></Calculadora>
        </>
    )
}