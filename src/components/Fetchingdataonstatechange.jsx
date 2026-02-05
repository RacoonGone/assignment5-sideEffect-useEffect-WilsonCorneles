import { useState } from "react";
import { useEffect } from "react";

export default function Fetchingdata() {
    const [data, setData] = useState(null);
    const [city, setCity] = useState("Jakarta");
    
    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=67aed719eba346d7aae60552260502&q=${city}`, {
            "method": "GET",
        })
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [city]);
    return (
        <div>
            <h1>7. Fetchingdataonstatechange</h1>
            <h2>WEATHER</h2>
            <div>
                <button onClick={() => setCity("Jakarta")}>Jakarta</button>
                <button onClick={() => setCity("Tokyo")}>Tokyo</button>
                <button onClick={() => setCity("London")}>London</button>
                <button onClick={() => setCity("New York")}>New York</button>
            </div>
            {data ? (
                <div>
                    <p>Location: {data.location.name}, {data.location.country}</p>
                    <p>Temperature: {data.current.temp_c} °C</p>
                    <p>Condition: {data.current.condition.text}</p>
                </div>
            ) : (<p>Loading weather...</p>
            )}
        </div>
    )
}