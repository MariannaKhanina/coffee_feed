export type CoffeeInfoType = {
    id: number;
    uid: string;
    blend_name: string;
    origin: string;
    variety: string;
    notes: string;
    intensifier: string;
    image: string | undefined;
}

export type DataType<T> = {
    item: T;
}
