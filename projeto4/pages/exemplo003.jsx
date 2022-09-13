import listaProdutos from "../data/listaProdutos"

function init() {
    function linhas() {
        return listaProdutos.map((produto) => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1>Lista de Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {linhas()}
                </tbody>
            </table>
        </>
    )
}   

export default init