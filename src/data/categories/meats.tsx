import { category } from "../interfaces";

const meats: category = {
    title: "Meats",
    image: process.env.PUBLIC_URL + '/images/category/meats.jpg',
    path: "/meats",
    items: [
        {
            title: "Chicken",
            image: process.env.PUBLIC_URL + '/images/grocery/chicken.jpg',
            path: "/chicken",
            description: "",
            price: 4.50,
        },
        {
            title: "Beef",
            image: process.env.PUBLIC_URL + '/images/grocery/beef.jpg',
            path: "/beef",
            description: "",
            price: 6.00,
        },
        {
            title: "Pork",
            image: process.env.PUBLIC_URL + '/images/grocery/pork.jpg',
            path: "/pork",
            description: "",
            price: 5.25,
        },
      ]
}

export default meats;