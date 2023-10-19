import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categories from "../../data/categories.tsx";
import { category } from "../../data/interfaces";
import "./Category.css";

const Category = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState<category>();

    // Find the category data for the page
    useEffect(() => {
        categories.forEach((row) => {
            const foundCell = row.find(
                (cell) => cell.title.toLowerCase() === categoryName)
            if (foundCell) setData(foundCell)
        }
        )
    }, [])

    const handleClickBack = () => {
        navigate("/")
    }

    return(
        data && <div className="category-page">
            <header className="category-title">
                <h1>{data.title}</h1>
            </header>
            <div className="item-grid">
                {data.items.map((item, index) => (
                    <button
                        key={index}
                        className="item-button">
                        {item.title}
                    </button>
                ))}
                <button
                    className="category-back-button"
                    onClick={handleClickBack}>
                    Back
                </button>
            </div>
        </div>
    )
}

export default Category;