import { category } from "../interfaces";

const fruits: category = {
    title: "Fruits",
    image: process.env.PUBLIC_URL + '/images/category/fruits.jpg',
    path: "/fruits",
    items: [
        {
            title: "Banana",
            image: process.env.PUBLIC_URL + '/images/grocery/banana.jpg',
            path: "/banana",
            description: "",
            price: 1.50,
        },
        {
            title: "Pineapple",
            image: process.env.PUBLIC_URL + '/images/grocery/pineapple.jpg',
            path: "/pineapple",
            description: "",
            price: 1.00,
        },
        {
            title: "Lemon",
            image: process.env.PUBLIC_URL + '/images/grocery/lemon.jpg',
            path: "/lemon",
            description: "",
            price: 1.25,
        },
    ]
}

export default fruits;