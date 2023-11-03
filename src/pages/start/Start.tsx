import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../../data/categories";
import { category, grocery } from "../../data/interfaces";
import "./Start.css";


const validItems = categories.flatMap((row: category[]) =>
  row.flatMap((category: category) =>
    category.items.map((item: grocery) => item.title)
  )
);

const Start = () => {
    const navigate = useNavigate();

    //keeps track of events
    var experimentAttempts = window.localStorage.getItem("attempts")
    var restartExp = window.localStorage.getItem("restartExperiment")
    console.log(experimentAttempts)

    if(experimentAttempts == null || restartExp == "true"){
        experimentAttempts = "none";
        window.localStorage.setItem("attempts", "none")
        window.localStorage.setItem("restartExperiment", "false")
    }

    const generateItems = () => {
        var item1 = validItems[Math.floor(Math.random() * validItems.length)];
        var item2 = validItems[Math.floor(Math.random() * validItems.length)];

        while(item1 === item2){
            item2 = validItems[Math.floor(Math.random() * validItems.length)];
        }
        return([item1, item2])
    }

    
    const items =  generateItems();
    const itemCategories = ["",""]
    
    const findCategories = () => {
        items.forEach((item: string, index: number) => {
            categories.forEach((row: category[]) => {
                row.forEach((category: category) => {
                    const foundItem = category.items.find((grocery) => grocery.title === item)
                    if (foundItem) {
                        const title = category.title.replace(" ","").toLowerCase();
                        itemCategories[index] = title
                    }
                })
            })
        })
    }

    findCategories()
    
    const handleClick = (showImage: boolean) => {
        const now = new Date().getTime();
        
        //1 == images, 2 == no images
        if(showImage){
            if(experimentAttempts == "none"){
                window.localStorage.setItem("attempts", "images")
            }
            else{
                window.localStorage.setItem("restartExperiment", "true")
                window.localStorage.setItem("attempts", "images")
            }
        }
        else{
            if(experimentAttempts == "none"){
                window.localStorage.setItem("attempts", "noimages")
            }
            else{
                window.localStorage.setItem("restartExperiment", "true")
                window.localStorage.setItem("attempts", "noimages")
            }
        }

        window.localStorage.setItem("items", JSON.stringify(items));
        window.localStorage.setItem("categories", JSON.stringify(itemCategories));
        window.localStorage.setItem("showImages", `${showImage}`);
        window.localStorage.setItem("startTime", now.toString())
        window.localStorage.setItem("wrongPages", "0")
        window.localStorage.setItem("cart", "[]");
        navigate("/home")
    }

    return(
        <div className="start-page">
            <header className="start-title">
                <h1>Start</h1>
            </header>
            {(experimentAttempts == "none" || experimentAttempts == "noimages")&& (
        <button         
        onClick={() => handleClick(true)} 
        className="start-button">
        With images
        </button>
            )}
        {(experimentAttempts == "none" || experimentAttempts == "images")&& (
            <button
                onClick={() => handleClick(false)} 
                className="start-button">
                Without images
            </button>
        )}
            <div className="start-items">
            Items to find
            <div className="start-find-items">
                {items.map((item, index) => (
                    <div key={index} className="start-item">
                        {item}
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Start;