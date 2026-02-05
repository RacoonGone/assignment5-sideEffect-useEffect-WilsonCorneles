import { useState } from "react";
import { useEffect } from "react";

export default function Counterupdatetitle() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setCount((x) => x + 1);
        }, 1000);
        return () => 
            clearInterval(id);
    }, []);
    return (
        <div>
            <h1>4. Timerwithcleanup</h1>
            <p>Timer : {count}</p>
        </div>
    )
}