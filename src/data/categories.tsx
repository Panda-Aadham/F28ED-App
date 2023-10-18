import bakery from "./categories/bakery.tsx";
import dairy from "./categories/dairy.tsx";
import fish from "./categories/fish.tsx";
import fruits from "./categories/fruits.tsx";
import juice from "./categories/juice.tsx";
import meats from "./categories/meats.tsx";
import pasta from "./categories/pasta.tsx";
import snacks from "./categories/snacks.tsx";
import vegetables from "./categories/vegetables.tsx";

const categories = [
    [fruits, pasta, juice],
    [meats, fish, vegetables],
    [snacks, bakery, dairy]
]

export default categories;