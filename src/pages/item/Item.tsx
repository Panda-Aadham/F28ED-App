import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { category, grocery } from "../../data/interfaces";
import categories from "../../data/categories";
import { addItem, setLastPath } from "../cart/cartHelpers";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Item.css";

const Item = () => {
    const { categoryName, itemName } = useParams();
    const navigate = useNavigate();
    const [itemData, setItemData] = useState<grocery>();
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    const showImage = window.localStorage.getItem("showImages") === "true";

    // Find item data from category
    useEffect(() => {
        categories.forEach((row: category[]) => {
            const foundCell = row.find(
                (cell: category) => cell.title.toLowerCase() === categoryName)
            if (foundCell) {
                setItemData(foundCell.items.find((item: grocery) =>
                    item.title.toLowerCase().replace(" ","") === itemName
                ))
            }
        })
    }, [])

    const handleClickBack = () => {
        navigate("/category/" + categoryName)
    }

    const handleClickCart = () => {
        setLastPath();
        navigate("/cart")
    }

    // Handle click "add to cart"
    const handleAddToCart = (itemData: grocery, quantity: number) => {
        setAddedToCart(true);
        addItem(itemData, quantity)

        setTimeout(() => {
            setAddedToCart(false);
        }, 1250);
      };

    // Increase/decrease quantity
    const handleClickQuantity = (value: number) => {
        if (quantity === 1) {
            if (value !== -1)
                setQuantity(quantity + value)
        } else setQuantity(quantity + value)
    }
    
    return(
        itemData && <div className="item-page">
            <header className="item-header">
                <h1 className="item-title">{itemData.title}</h1>
                <div onClick={handleClickCart}>
                    <ShoppingCartIcon fontSize="large" className="item-cart"/>
                </div>
            </header>
            <div className="item-display">
                {showImage && <img 
                    src={itemData.image}
                    alt="item display"
                    className="item-display-image"/>}
                <h3>{itemData.description}</h3>
            </div>
            <div className="item-control">
                <h3>Quantity</h3>
                <div className="item-cart-grid">
                    <button
                        onClick={() => handleClickQuantity(-1)}
                        className="item-cart-button">-</button>
                    <span className="number">{quantity}</span>
                    <button
                        onClick={() => handleClickQuantity(1)}
                        className="item-cart-button">+</button>
                </div>
                <button
                    className={addedToCart ? "item-cart-button item-add-cart added" : "item-cart-button item-add-cart"}
                    onClick={() => handleAddToCart(itemData, quantity)}
                    disabled={addedToCart}>
                    {addedToCart ? "Item added" : "Add to cart"}
                </button>
                <button
                    className="item-back-button"
                    onClick={handleClickBack}>
                    Back
                </button>
            </div>
        </div>
    )
}

export default Item;