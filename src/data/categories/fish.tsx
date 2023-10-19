import { category } from "../interfaces";

const fish: category = {
    title: "Fish",
    image: process.env.PUBLIC_URL + '/images/category/fish.jpg',
    path: "/fish",
    items: [
        {
            title: "Salmon",
            image: process.env.PUBLIC_URL + '/images/grocery/salmon.jpg',
            path: "/salmon",
            description: "",
            price: 8.50,
        },
        {
            title: "Tuna",
            image: process.env.PUBLIC_URL + '/images/grocery/tuna.jpg',
            path: "/tuna",
            description: "",
            price: 7.00,
        },
        {
            title: "Cod",
            image: process.env.PUBLIC_URL + '/images/grocery/cod.jpg',
            path: "/cod",
            description: "",
            price: 6.25,
        },
    ]
}

export default fish;