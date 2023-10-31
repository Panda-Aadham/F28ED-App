import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// This is a component to check if page visited is right or wrong
const ExperimentPage = ({ children }: any) => {
    const { categoryName, itemName } = useParams();
    const [rightPage, setRightPage] = useState(false);
    
    useEffect(() => {
        const categoriesString = window.localStorage.getItem("categories")
        const itemString = window.localStorage.getItem("items");
        if (categoriesString) {
            const itemCategories = JSON.parse(categoriesString)
            if (itemString) {
                const items = JSON.parse(itemString)
                console.log(itemCategories)
                console.log("itemName", itemName)
                console.log("categoryName", categoryName)
                // Check item page
                if (itemName) {
                    items.forEach((item: string) => {
                        if (item === itemName) {
                            setRightPage(true);
                        }
                    })
                // Check category page
                } else if (categoryName) {
                    itemCategories.forEach((category: string) => {
                        console.log("category", category)
                        if (category === categoryName) {
                            console.log("setTrue")
                            setRightPage(true)
                        }
                    })
                // On home page
                } else {
                    setRightPage(true)
                }
            }
        }
        
        const wrongPagesString = window.localStorage.getItem("wrongPages");
        if (rightPage === false && wrongPagesString) {
            console.log(rightPage)
            const wrongPages = JSON.parse(wrongPagesString) + 1;
            window.localStorage.setItem("wrongPages", JSON.stringify(wrongPages));
        }
    }, [])

    return(
        <div>
            {children}
        </div>
    )
}

export default ExperimentPage;