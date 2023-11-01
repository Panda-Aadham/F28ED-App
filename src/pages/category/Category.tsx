import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categories from "../../data/categories";
import { setLastPath } from "../cart/cartHelpers";
import { category, grocery } from "../../data/interfaces";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExperimentPage from "../experimentPage/ExperimentPage";
import "./Category.css";

const Category = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState<category>();

    const showImage = window.localStorage.getItem("showImages") === "true";

    // Find the category data for the page
    useEffect(() => {
        categories.forEach((row: category[]) => {
            const foundCell = row.find(
                (cell: category) => cell.title.toLowerCase() === categoryName)
            if (foundCell) setData(foundCell)
        }
        )
    }, [])

    const handleClickItem = (item: grocery) => {
        navigate("/category/" + categoryName + item.path)
    }

    const handleClickCart = () => {
        setLastPath();
        navigate("/cart")
    }

    const handleClickBack = () => {
        window.localStorage.setItem("isBack", "true")
        navigate("/home")
    }

    return(
        data && <ExperimentPage>
            <header className="category-header">
                <h1 className="category-title">{data.title}</h1>
                <div onClick={handleClickCart}>
                    <ShoppingCartIcon fontSize="large" className="category-cart"/>
                </div>
            </header>
            <div className="item-grid">
                {data.items.map((item: grocery, index: number) => (
                    <button
                        key={index}
                        className="item-button"
                        onClick={() => handleClickItem(item)}>
                        {showImage && <img 
                            src={item.image}
                            alt="item image"
                            className="item-image"/>}
                        {item.title}
                    </button>
                ))}
                <button
                    className="category-back-button"
                    onClick={handleClickBack}>
                    Back
                </button>
            </div>
        </ExperimentPage>
    )
}

export default Category;