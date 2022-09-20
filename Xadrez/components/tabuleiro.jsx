import Linha from "./linha";

export default function init(props) {
    let isBlack = true;
    let tab = [];
    let dim

    props.dimensao ? dim = props.dimensao : dim = 5

    for (let i = 0; i < dim; i++) {
        if (isBlack) {
            tab.push(<Linha key={i} preto dimensao={dim} />);
            isBlack = false;
        } else if (isBlack === false) {
            tab.push(<Linha key={i} dimensao={dim} />);
            isBlack = true;
        }
    }

    console.log("Array: ", tab.length);

    return (
        tab

        // <div>
        //     {tab.map((item, index) => (
        //         <span key={index}>{item}</span>
        //     ))}
        // </div>
    );
}