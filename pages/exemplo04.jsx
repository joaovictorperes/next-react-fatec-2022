// Exemplo de uso do componente Titulo

import Titulo from "../components/Titulo";

export default function init() {
    return (
        <>
            <Titulo titulo="Teste Titulo" subtitulo="Teste subtitulo" pequeno></Titulo>
            <Titulo titulo="Página cadastro" subtitulo="Gerenciar cadastro" pequeno={false}/>
        </>
    )


}