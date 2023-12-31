import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ExperimentPage.css"

// This is a component to check if page visited is right or wrong
const ExperimentPage = ({ children }: any) => {
    const { categoryName, itemName } = useParams();
    const [itemsToFind, setItemsToFind] = useState([]);
    
    useEffect(() => {
        let rightPage = false;
        const categoriesString = window.localStorage.getItem("categories")
        const itemString = window.localStorage.getItem("items");
        if (categoriesString) {
            const itemCategories = JSON.parse(categoriesString)
            if (itemString) {
                const items = JSON.parse(itemString)
                setItemsToFind(items)
                const isBack = window.localStorage.getItem("isBack")
                // Check if "Back" was clicked
                if (isBack === "true") {
                    window.localStorage.removeItem("isBack")
                    rightPage = true
                // Check item page
                } else if (itemName) {
                    items.forEach((item: string) => {
                        if (item.replace(" ","").toLowerCase() === itemName) {
                            rightPage = true;
                        }
                    })
                // Check category page
                } else if (categoryName) {
                    itemCategories.forEach((category: string) => {
                        console.log("category", category)
                        if (category === categoryName) {
                            console.log("setTrue")
                            rightPage = true;
                        }
                    })
                // On home page
                } else {
                    rightPage = true;
                }
            }
        }
        
        const wrongPagesString = window.localStorage.getItem("wrongPages");
        if (!rightPage && wrongPagesString) {
            console.log(rightPage)
            const wrongPages = JSON.parse(wrongPagesString) + 1;
            window.localStorage.setItem("wrongPages", JSON.stringify(wrongPages));
        }
    }, [])

    return(
        <div className="web-page">
            {children}
            <div className="user-items">
                {itemsToFind && itemsToFind.map((item) => (
                    <h4 className="user-item">{item}</h4>
                ))}
            </div>
        </div>
    )
}

export default ExperimentPage;