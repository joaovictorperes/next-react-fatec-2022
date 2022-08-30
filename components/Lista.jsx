export default function init(props) {
        const vet = []
        for (let i = 0; i <= props.quantidade; i++) {
            if ( i < props.quantidade) {
                vet.push(<span>{i},</span>)
            } else {
                vet.push(<span>{i}</span>)
            }
        }
        return vet
}