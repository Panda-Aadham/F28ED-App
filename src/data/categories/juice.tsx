import { category } from "../interfaces";

const juice: category = {
    title: "Juice",
    image: process.env.PUBLIC_URL + '/images/category/juice.jpg',
    path: "/juice",
    items: [
        {
            title: "Orange Juice",
            image: process.env.PUBLIC_URL + '/images/grocery/orangejuice.jpg',
            path: "/orangejuice",
            description: "",
            price: 2.50,
        },
        {
            title: "Apple Juice",
            image: process.env.PUBLIC_URL + '/images/grocery/applejuice.jpg',
            path: "/applejuice",
            description: "",
            price: 2.00,
        },
        {
            title: "Grape Juice",
            image: process.env.PUBLIC_URL + '/images/grocery/grapejuice.jpg',
            path: "/grapejuice",
            description: "",
            price: 2.25,
        },
    ]
}

export default juice;