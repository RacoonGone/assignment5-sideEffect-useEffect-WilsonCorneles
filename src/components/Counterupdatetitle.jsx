import { useState } from "react";
import { useEffect } from "react";

export default function Counterupdatetitle() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Count Changed");
        document.title = `Count: ${count}`;
    }, [count]);
    return (
        <div>
            <h1>3. Counterupdatetitle</h1>
            <p>Counter : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}