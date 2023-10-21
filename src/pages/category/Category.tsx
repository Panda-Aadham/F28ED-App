import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categories from "../../data/categories.tsx";
import { setLastPath } from "../cart/cartHelpers.tsx";
import { category } from "../../data/interfaces";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Category.css";

const Category = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState<category>();

    const showImage = true;

    // Find the category data for the page
    useEffect(() => {
        categories.forEach((row) => {
            const foundCell = row.find(
                (cell) => cell.title.toLowerCase() === categoryName)
            if (foundCell) setData(foundCell)
        }
        )
    }, [])

    const handleClickItem = (item) => {
        navigate("/category/" + categoryName + item.path)
    }

    const handleClickCart = () => {
        setLastPath();
        navigate("/cart")
    }

    const handleClickBack = () => {
        navigate("/home")
    }

    return(
        data && <div className="category-page">
            <header className="category-header">
                <h1 className="category-title">{data.title}</h1>
                <div onClick={handleClickCart}>
                    <ShoppingCartIcon fontSize="large" className="category-cart"/>
                </div>
            </header>
            <div className="item-grid">
                {data.items.map((item, index) => (
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
        </div>
    )
}

export default Category;