import { category } from "../interfaces";

const dairy: category = {
    title: "Dairy",
    image: process.env.PUBLIC_URL + '/images/category/dairy.jpg',
    path: "/dairy",
    items: [
        {
            title: "Milk",
            image: process.env.PUBLIC_URL + '/images/grocery/milk.jpg',
            path: "/milk",
            description: "",
            price: 1.50,
        },
        {
            title: "Cheese",
            image: process.env.PUBLIC_URL + '/images/grocery/cheese.jpg',
            path: "/cheese",
            description: "",
            price: 3.00,
        },
        {
            title: "Yogurt",
            image: process.env.PUBLIC_URL + '/images/grocery/yogurt.jpg',
            path: "/yogurt",
            description: "",
            price: 2.25,
        },
    ]
}

export default dairy;