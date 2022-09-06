import Celula from "./celula"
import css from "../styles/linha.module.css"

export default function init(props) {
    return (
        <div className={css.lin}>
            <Celula preto={props.preto}/>
            <Celula preto={!props.preto}/>
            <Celula preto={props.preto}/>
            <Celula preto={!props.preto}/>
            <Celula preto={props.preto}/>
            <Celula preto={!props.preto}/>
            <Celula preto={props.preto}/>
            <Celula preto={!props.preto}/>
            <Celula preto={props.preto}/>
        </div>
    )
}