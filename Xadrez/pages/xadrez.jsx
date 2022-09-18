import Tabuleiro from "../components/tabuleiro";

export default function init() {
    return (
        <>
            <Tabuleiro dimensao={5} />
            <h1>OUTRO TABULEIRO</h1>
            <Tabuleiro />
        </>
    );
}
