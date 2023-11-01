import React, { RefObject, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./End.css";

const End = () => {
    const [totalTime, setTotalTime] = useState("");
    const [wrongPages, setWrongPages] = useState("");
    const [showDetails, setShowDetails] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [openModal, setOpenModal] = useState(false);

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
                    onClick={() => setOpenModal(true)}
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
            <PinModal
                setShowDetails={setShowDetails}
                setOpenModal={setOpenModal}
                openModal={openModal}/>
        </div>
    )
}

const PinModal = (props: {setShowDetails: (arg0: boolean) => void, setOpenModal: (arg0: boolean) => void, openModal: boolean}) => {
    const inputRefs: RefObject<HTMLInputElement>[] = Array(4).fill(null).map(() => React.createRef());
    const {setShowDetails, openModal, setOpenModal} = props;
    const [pin, setPin] = useState("");
    const correctPin = "1234"

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = event.target.value;
        if (/^\d*$/.test(value) && value.length <= 1) {
        setPin((prevPin) => {
            const newPin = prevPin.split("");
            newPin[index] = value;
            return newPin.join("");
        });
        if (index < 3 && value) {
            if (inputRefs[index + 1].current) {
            inputRefs[index + 1]?.current?.focus();
            }
        }
        }
    };

    const handleSubmit = () => {
        if (pin === correctPin) {
            setShowDetails(true)
            handleClose();
        }
    }

    const handleClose = () => {
        setOpenModal(false)
        setPin("")
    };

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="modal-box">
                <div className="modal-content">
                    <h3 className="modal-title">
                        Enter moderator pin
                    </h3>
                    <div className="modal-pin-inputs">
                        <input
                            type="text"
                            className="modal-pin-input"
                            ref={inputRefs[0]}
                            value={pin[0] || ""}
                            onChange={(e) => handleInputChange(e, 0)}
                        />
                        <input
                            type="text"
                            className="modal-pin-input"
                            ref={inputRefs[1]}
                            value={pin[1] || ""}
                            onChange={(e) => handleInputChange(e, 1)}
                        />
                        <input
                            type="text"
                            className="modal-pin-input"
                            ref={inputRefs[2]}
                            value={pin[2] || ""}
                            onChange={(e) => handleInputChange(e, 2)}
                        />
                        <input
                            type="text"
                            className="modal-pin-input"
                            ref={inputRefs[3]}
                            value={pin[3] || ""}
                            onChange={(e) => handleInputChange(e, 3)}
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="modal-submit">
                        Submit pin
                    </button>
                </div>
            </Box>
        </Modal>
    )
}

export default End