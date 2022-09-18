import Linha from "./linha";

export default function init(props) {
    let isBlack = true;
    let tab = [];

    for (let i = 0; i < props.dimensao; i++) {
        if (isBlack) {
            tab.push(<Linha preto dimensao={props.dimensao} />);
            isBlack = false;
        } else if (isBlack === false) {
            tab.push(<Linha dimensao={props.dimensao} />);
            isBlack = true;
        }
    }

    console.log("Array: ", tab.length);

    return (
        <div>
            {tab.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </div>
    );
}
