import Pai from "../components/comunicacao_direta/Pai"

export default function init() {
    return (
        <>
            <h1>Teste Pai</h1>
            <Pai/>
            <span>-------------------------------------------</span>
            <Pai nome="Nikola" sobrenome="Tesla"></Pai>
        </>
    )
}