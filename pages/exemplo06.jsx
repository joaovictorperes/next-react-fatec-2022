import CalculadorV2 from "../components/CalculadoraV2"

export default function init() {
    return (
        <>
            <CalculadorV2 num1={10} num2={15} soma/>
            <CalculadorV2 num1={20} num2={15} subtracao/>
            <CalculadorV2 num1={20} num2={15} multiplicacao/>
            <CalculadorV2 num1={600} num2={15} divisao/>
            <CalculadorV2 num1={600} num2={0} divisao/>
            <CalculadorV2 num1={600} num2={0}/>
        </>
    )
}