import { use, useState } from "react";
import { useEffect } from "react";

export default function Conditionaluseeffect() {
    const [on, setOn] = useState(false);
    useEffect(() => {
        if (on) {
            console.log("Effect is running")
        }
    }, [on]);
    return (
        <>
            <h1>5. Conditionaluseeffect</h1>
            <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>
        </>
    )
}