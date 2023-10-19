import { category } from "../interfaces";

const vegetables: category = {
    title: "Vegetables",
    image: process.env.PUBLIC_URL + '/images/category/vegetables.jpg',
    path: "/vegetables",
    items: [
        {
            title: "Broccoli",
            image: process.env.PUBLIC_URL + '/images/grocery/broccoli.jpg',
            path: "/broccoli",
            description: "",
            price: 2.00,
        },
        {
            title: "Carrots",
            image: process.env.PUBLIC_URL + '/images/grocery/carrots.jpg',
            path: "/carrots",
            description: "",
            price: 1.50,
        },
        {
            title: "Cabbage",
            image: process.env.PUBLIC_URL + '/images/grocery/cabbage.jpg',
            path: "/cabbage",
            description: "",
            price: 2.25,
        },
    ]
}

export default vegetables;