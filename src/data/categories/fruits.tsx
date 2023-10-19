import { category, grocery } from "../interfaces";

const fruits: category = {
    title: "Fruits",
    image: process.env.PUBLIC_URL + '/images/category/fruits.jpg',
    path: "/fruits",
    items: [
        {
            title: "Apple",
            image: process.env.PUBLIC_URL + '/images/grocery/apple.jpg',
            path: "/apple",
            description: "Crisp and juicy",
            price: 1.50,
        },
        {
            title: "Orange",
            image: process.env.PUBLIC_URL + '/images/grocery/orange.jpg',
            path: "/orange",
            description: "Sweet and plump",
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