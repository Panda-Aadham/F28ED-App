import React, { RefObject, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./End.css";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    "text-align": 'center',
  };

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
            <PinModal/>
        </div>
    )
}

const PinModal = () => {
    const [openModal, setOpenModal] = useState(false);
    const [pin, setPin] = useState("");
    const inputRefs: RefObject<HTMLInputElement>[] = Array(4).fill(null).map(() => React.createRef());

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

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography
                    id="modal-modal-title"
                    className="modal-title"
                    variant="h6"
                    component="h2">
                    Enter moderator pin
                </Typography>
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
                </Box>
            </Modal>
        </>
    )
}

export default End