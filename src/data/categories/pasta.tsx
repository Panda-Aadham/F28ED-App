import { category } from "../interfaces";

const pasta: category = {
    title: "Pasta",
    image: process.env.PUBLIC_URL + '/images/category/pasta.jpg',
    path: "/pasta",
    items: [
        {
            title: "Spaghetti",
            image: process.env.PUBLIC_URL + '/images/grocery/spaghetti.jpg',
            path: "/spaghetti",
            description: "",
            price: 2.00,
        },
        {
            title: "Penne",
            image: process.env.PUBLIC_URL + '/images/grocery/penne.jpg',
            path: "/penne",
            description: "",
            price: 1.75,
        },
        {
            title: "Fusilli",
            image: process.env.PUBLIC_URL + '/images/grocery/fusilli.jpg',
            path: "/fusilli",
            description: "",
            price: 1.80,
        },
    ]
}

export default pasta;