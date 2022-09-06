import css from "../styles/celula.module.css"

export default function init(props) {
    return (
        <>
            <div style={{backgroundColor: props.preto ? "black" : "white"}} className={css.cel}></div>
        </>
    )
}