import type { LoadEvent } from "@sveltejs/kit";

export type CoffeeInfoType = {
    id: number;
    uid: string;
    blend_name: string;
    origin: string;
    variety: string;
    notes: string;
    intensifier: string;
}

export type DataType<T> = {
    item: T;
}

const apiUrl = 'https://random-data-api.com/api/coffee/random_coffee';
const imageUrl = 'https://loremflickr.com/500/500/coffee_bean';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: LoadEvent): Promise<DataType<CoffeeInfoType>> {
    const res = await fetch(apiUrl);
    const item = await res.json();

    return { item };
}