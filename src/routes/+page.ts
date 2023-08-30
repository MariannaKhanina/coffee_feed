import { updateCoffeeList } from "$lib/store";

export async function load() {
    await updateCoffeeList();
}