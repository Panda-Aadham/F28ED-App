import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./End.css";

const End = () => {
    const [totalTime, setTotalTime] = useState("");
    const [wrongPages, setWrongPages] = useState("");
    const [showDetails, setShowDetails] = useState(false);
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
        const wrongPageString = window.localStorage.getItem("wrongPages")
        if (start && end) {
            const total = parseInt(end) - parseInt(start)
            setTotalTime(`${(total/1000).toFixed(1)} seconds`)
        }
        if (wrongPageString) setWrongPages(wrongPageString)
    }, [])

    return(
        <div className="end-page">
            <header className="end-header">
                <h1>Completed</h1>
            </header>
            {showDetails ? 
                <div className="end-final-details">
                    <div className="end-details">
                        <h3>Completed in: {totalTime}</h3>
                    </div>
                    <div className="end-details">
                        <h3>Wrong pages visited: {wrongPages}</h3>
                    </div>
                </div>
                : 
                <button
                    onClick={() => setShowDetails(true)}
                    className="show-end-details">
                    Show details
                </button>
            }
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