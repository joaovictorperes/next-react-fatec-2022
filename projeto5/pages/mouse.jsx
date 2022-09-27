import { useState } from "react";

export default function init() {
    // React Hooks
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function moveMouse(event) {
        console.log(event.clientX, event.clientY)
        setX(event.clientX); // x = event.ClientX (não funciona)
        setY(event.clientY);
    }

    return (
        <div style={
            {height: "100vh", 
            display: "flex", 
            flexDirection: "column",
            color: "green", 
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bolder",
            backgroundColor: "black"
        }} onMouseMove={moveMouse}>
            <span>Mouse x: {x}</span>
            <span>Mouse y: {y}</span>
        </div>
    )
}