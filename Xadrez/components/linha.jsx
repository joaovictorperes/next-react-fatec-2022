import Celula from "./celula";
import css from "../styles/linha.module.css";

export default function init(props) {
    let isBlack = true;
    let lin = [];
    for (let i = 0; i < props.dimensao; i++) {
        if (isBlack) {
            lin.push(<Celula key={i} preto={props.preto} />);
            isBlack = false;
        } else {
            lin.push(<Celula key={i} preto={!props.preto} />);
            isBlack = true;
        }
    }

    return (
        <div className={css.lin}>
            {lin}
        </div>
        
        // <div className={css.lin}>
        //     {lin.map((item, index) => (
        //         <span key={index}>{item}</span>
        //     ))}
        // </div>
    );
}