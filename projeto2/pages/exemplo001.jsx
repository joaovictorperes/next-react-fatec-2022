// Se o css for global, ele deve ser importado no arquivo _app.js (regra do next!!!)

export default function init() {
    //Não é possível importar diretamente para o css
    return (
        <div className="ex001">
            <div className="azul">#azul</div>
            <div className="verde">#verde</div>
        </div>
    )
}