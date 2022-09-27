import { useState } from "react";
import Display from "../components/Display"

export default function init() {
    const [valor, setValor] = useState(0);

    function somar() {
        setValor(valor+1)
    }

    const subtrair = () => setValor(valor-1);
    
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "gray"
        }}>
            <Display numero={valor}/>
            <div>
                <button onClick={subtrair}>-</button>
                <button onClick={somar}>+</button>
            </div>
        </div>
    )
}