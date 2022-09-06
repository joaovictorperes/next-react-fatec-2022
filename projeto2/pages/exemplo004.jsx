import Estilo from "../components/Estilo"

export default function init() {
    return (
        <>
            <Estilo numero={10}></Estilo>
            <Estilo numero={-5} direita={"right"}/>
        </>
    )
}