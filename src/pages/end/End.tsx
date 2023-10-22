import React, { useEffect, useState } from "react";
import "./End.css";
import { useNavigate } from "react-router-dom";

const End = () => {
    const [totalTime, setTotalTime] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleContinue = () => {
        navigate("/")
    }

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
            <div className="end-finish">
                <label className="end-check">
                    <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    />
                    I have completed questionnaire
                </label>
                <button
                    disabled={!isChecked}
                    className={isChecked ? "end-continue" : "end-continue disabled"}
                    onClick={handleContinue}>
                    Continue
                </button>
            </div>
        </div>
    )
}

export default End