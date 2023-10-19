import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categories from "../../data/categories.tsx";
import "./Category.css";

const Category = () => {
    const { categoryName } = useParams();
    const [data, setData] = useState();

    // Find the category data for the page
    useEffect(() => {
        categories.forEach((row) => {
            const foundCell = row.find(
                (cell) => cell.title.toLowerCase() === categoryName)
            if (foundCell) setData(foundCell)
        }
        )
    }, [])

    return(
        <div>
            <header>
                <h1>{data.title}</h1>
            </header>
        </div>
    )
}

export default Category;