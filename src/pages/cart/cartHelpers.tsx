import { grocery } from "../../data/interfaces";

export interface cartItem {
    item: grocery;
    quantity: number;
}

export type cart = cartItem[]

export const setLastPath = () => {
    window.localStorage.setItem("lastPath", window.location.pathname)
}

export const getCart = () => {
    const cartStore = window.localStorage.getItem("cart");
    const items: cart = cartStore ? JSON.parse(cartStore) : undefined;
    return items;
}

const setCart = (newItems: cart) => {
    const itemsString = JSON.stringify(newItems);
    window.localStorage.setItem("cart", itemsString);
}

export const addItem = (item: grocery, quantity: number) => {
    const items = getCart()
    const existingItem = items?.find((cartItem) => cartItem.item.title === item.title);
    if (existingItem) {
        const updatedItems = items.map((cartItem) =>
            cartItem.item.title === item.title
            ? { item: cartItem.item, quantity: cartItem.quantity + quantity }
            : cartItem
        );
        setCart(updatedItems);
    } else {
        items ? setCart([...items, { item, quantity }]) : setCart([{ item, quantity }])
    }
}

export const removeItem = (item: grocery, quantity: number) => {
    const items = getCart()
    const itemIndex = items.findIndex((cartItem) => cartItem.item.title === item.title);
    if (itemIndex !== -1) {
        const updatedItems = [...items];
        updatedItems[itemIndex].quantity -= quantity;
        if (updatedItems[itemIndex].quantity <= 0) {
            updatedItems.splice(itemIndex, 1);
        }
        setCart(updatedItems);
    }
}

export const validateCheckout = () => {
    const cartString = window.localStorage.getItem("cart");
    const hasItem = [false];
    if (cartString) {
        const cart = JSON.parse(cartString)
        const itemsString = window.localStorage.getItem("items") 
        if (itemsString) {
            const items = JSON.parse(itemsString);
            items.forEach((item: string, index: number) => {
                hasItem[index] = cart.find((cartItem: cartItem) => cartItem.item.title === item) ? true : false
            })
        }
    }
    return hasItem.every((element) => element === true) ? true : false
}