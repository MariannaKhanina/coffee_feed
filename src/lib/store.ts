import { writable } from "svelte/store";
import type { CoffeeInfoType } from "./types";
import { fetchItem, getImageUrl } from "./api";

export const coffeeList = writable<CoffeeInfoType[]>([]);

export const updateCoffeeList = async () => {
    const coffeeItem : CoffeeInfoType = await fetchItem();
    coffeeItem.image = getImageUrl(coffeeItem.blend_name);

    coffeeList.update((value) => [...value, coffeeItem]);
}