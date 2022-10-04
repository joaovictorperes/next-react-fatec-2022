interface PessoaProps {
    nome: string
    idade: number
    sexo?: string
    sobrenome?: string
}

export default function Pessoa(props: PessoaProps) {
    return (
        <>
            <div>Nome: {props.nome} {props.sobrenome}</div>
            <div>Idade: {props.idade}</div>
            <div>Sexo: {props.sexo ?? "Sexo não informado"}</div>
        </>
    )
}