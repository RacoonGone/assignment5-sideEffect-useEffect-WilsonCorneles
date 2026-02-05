import { useEffect } from "react";

export default function HelloEffect() {
    useEffect(() => {
        console.log("Component Mounted");
    }, []); 
}