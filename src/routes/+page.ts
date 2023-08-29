export type CoffeeInfoType = {
    id: number;
    uid: string;
    blend_name: string;
    origin: string;
    variety: string;
    notes: string;
    intensifier: string;
}

export type CoffeeListType = {
    list: CoffeeInfoType[];
}

/** @type {import('./$types').PageLoad} */
export function load(): CoffeeListType {
    return {
        "list":
            [{
                "id": 3417,
                "uid":
                    "9c772363-8362-48a2-b871-cdbbea018b86",
                "blend_name": "Blue Enlightenment",
                "origin": "Chiriqui, Panama",
                "variety": "Ethiopian Heirloom",
                "notes": "crisp, coating, black-tea, peanut, tobacco",
                "intensifier": "juicy"
            },],
    };
}