import Filho from "../components/comunicacao_direta/Filho"

function acao1() {
    console.log("acao 1") // forma 1
}

let num

export default function init() {
    

    function acao2() { 
        alert("acao 2") // forma 2 
    }

    function acao5(event) {
        console.log(event)
    }

    function acao5v2(event) {
        alert(event)
    }

    return (
        <>
            <button onClick={acao1}>Clique 1</button>
            <button onClick={acao2}>Clique 2</button>
            <button onClick={function () { 
                    alert("acao 3")
                }}>Clique 3</button>
            <button onClick={() => alert("acao 4")}>Clique 4</button>
            <button onClick={acao5}>Clique 5</button>
            <button onClick={event=>acao5v2(event.altKey)}>Clique 5 v2</button>
            <div>
                <input type="text" onChange={event => {
                    num = event.target.value
                    console.log(num)
                }} />
            </div>
            
        </>
    )
}

