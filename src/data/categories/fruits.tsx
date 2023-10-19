import { category, grocery } from "../interfaces";

const fruits: category = {
    title: "Fruits",
    image: process.env.PUBLIC_URL + '/images/category/fruits.jpg',
    path: "/fruits",
    items: [
        {
            title: "Banana",
            image: process.env.PUBLIC_URL + '/images/grocery/banana.jpg',
            path: "/banana",
            description: "Crisp and yummy",
            price: 1.50,
        },
        {
            title: "Pineapple",
            image: process.env.PUBLIC_URL + '/images/grocery/pineapple.jpg',
            path: "/pineapple",
            description: "Sweet and prickly",
            price: 1.00,
        },
        {
            title: "Lemon",
            image: process.env.PUBLIC_URL + '/images/grocery/lemon.jpg',
            path: "/lemon",
            description: "Citrusy and sour",
            price: 1.25,
        },
    ]
}

export default fruits;