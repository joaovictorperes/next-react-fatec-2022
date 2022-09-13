export default function init() {
    const nomes = ["Cebolinha", "Mônica", "Magali", "Cascão"]

    //forma 1
    function renderizarLista() {
        let lista = []
        // nomes.forEach(item => {
        //     lista.push(<li>{item}</li>)
        // }) 
        for (let index = 0; index < nomes.length; index++) {
            const element = nomes[index];
            lista.push(<li key={index}>{element}</li>)
        }
        return lista
    }

    //forma 2
    function renderizarListaMap() {
        return nomes.map((elemento,i) => <li key={i}>{elemento}</li>)
    }

    return (
        <>
            <ol>
                <h3>Nomes</h3>
                {renderizarLista()}
                <h3>Nomes - forma 2</h3>
                {renderizarListaMap()}
            </ol>
        </>
    )
}