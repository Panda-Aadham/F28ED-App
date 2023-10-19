import { category } from "../interfaces";

const bakery: category = {
    title: "Bakery",
    image: process.env.PUBLIC_URL + '/images/category/bakery.jpg',
    path: "/bakery",
    items: [
        {
            title: "Croissant",
            image: process.env.PUBLIC_URL + '/images/grocery/croissant.jpg',
            path: "/croissant",
            description: "",
            price: 1.75,
        },
        {
            title: "Baguette",
            image: process.env.PUBLIC_URL + '/images/grocery/baguette.jpg',
            path: "/baguette",
            description: "",
            price: 2.00,
        },
        {
            title: "Muffin",
            image: process.env.PUBLIC_URL + '/images/grocery/muffin.jpg',
            path: "/muffin",
            description: "",
            price: 1.50,
        },
    ]
}

export default bakery;