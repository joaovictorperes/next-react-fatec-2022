import listaProdutos from "../data/listaProdutos";

export default function init() {
    function renderizarLista() {
        return listaProdutos.map((item) => 
            <li key={item.id}>
                id = {item.id}
                <br/> nome = {item.nome}
                <br/> preco = {item.preco}
            </li>)
    }

    return (
        <>
            <h1>Produtos</h1>
            <ol>
                {renderizarLista()}
            </ol>
        </>
    )
}