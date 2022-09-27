export default function init(props) {
    return (
        <div style={{
            display: "flex",
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            background: "black",
            color: "white",
            fontSize: "2rem",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px"
        }}>
            {props.numero}
        </div>
    )
}