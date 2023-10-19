import { category } from "../interfaces";

const snacks: category = {
    title: "Snacks",
    image: process.env.PUBLIC_URL + '/images/category/snacks.jpg',
    path: "/snacks",
    items: [
        {
            title: "Crisps",
            image: process.env.PUBLIC_URL + '/images/grocery/crisps.jpg',
            path: "/crisps",
            description: "",
            price: 2.00,
        },
        {
            title: "Candy",
            image: process.env.PUBLIC_URL + '/images/grocery/candy.jpg',
            path: "/candy",
            description: "",
            price: 1.75,
        },
        {
            title: "Pretzels",
            image: process.env.PUBLIC_URL + '/images/grocery/pretzels.jpg',
            path: "/pretzels",
            description: "",
            price: 1.80,
        },
    ]
}

export default snacks;