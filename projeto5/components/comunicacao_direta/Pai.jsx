import Filho from "./Filho"

export default function inti(props) {
    return (
        <>
            <Filho nome="Alan" sobrenome="Turing"/>
            <Filho {...props} nome="Nívio" />
        </>
    )
}