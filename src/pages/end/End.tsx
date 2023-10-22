import React, { useEffect, useState } from "react";
import "./End.css";

const End = () => {
    const [totalTime, setTotalTime] = useState("");

    useEffect(() => {
        const start = window.localStorage.getItem("startTime")
        const end = window.localStorage.getItem("endTime")
        if (start && end) {
            const total = parseInt(end) - parseInt(start)
            setTotalTime(`${total/1000} seconds`)
        }
    }, [])

    return(
        <div className="end-page">
            <header className="end-header">
                <h1>Completed</h1>
            </header>
            <div className="end-details">
                <h3>Completed in: {totalTime}</h3>
            </div>
        </div>
    )
}

export default End