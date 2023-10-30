import bakery from "./categories/bakery";
import dairy from "./categories/dairy";
import fish from "./categories/fish";
import fruits from "./categories/fruits";
import juice from "./categories/juice";
import meats from "./categories/meats";
import pasta from "./categories/pasta";
import snacks from "./categories/snacks";
import vegetables from "./categories/vegetables";

const categories = [
    [fruits, pasta, juice],
    [meats, fish, vegetables],
    [snacks, bakery, dairy]
]

export default categories;