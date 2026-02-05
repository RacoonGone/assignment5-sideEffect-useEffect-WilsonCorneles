import { useState } from "react";
import { useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Count Changed");
    }, [count]);
    return (
        <div>
            <h1>2. Counter</h1>
            <p>Counter : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}