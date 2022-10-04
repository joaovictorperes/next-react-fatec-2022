import Pessoa from "../components/Pessoa"

export default function init() {
    return (
        <>
            <h1>Exemplo Typescript</h1>
            <Pessoa idade={19} nome={"Pitágoras"} sobrenome={"de Samos"}/>
            <Pessoa idade={21} nome={"Aristóteles"} sexo={"masculino"}/>
        </>
    )
}