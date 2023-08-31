import { writable } from "svelte/store";
import type { CoffeeInfoType } from "./types";
import { LoadingStatusEnum } from './types';
import { fetchItem, getImageUrl } from "./api";

export const error = writable<Error | null>(null);

export const coffeeList = writable<CoffeeInfoType[]>([]);

export const loadingStatus = writable<LoadingStatusEnum | null>(null) ;

export const updateCoffeeList = async () => {
    loadingStatus.set(LoadingStatusEnum.loading);
  
    await fetchItem().then(coffeeItem => {
        coffeeItem.image = getImageUrl(coffeeItem.blend_name);
        return coffeeItem;
    }).then(coffeeItem => {
        coffeeList.update((value) => [...value, coffeeItem]);
        loadingStatus.set(LoadingStatusEnum.done);
    }).catch((err) => {
        console.log(err);
        loadingStatus.set(LoadingStatusEnum.error);
        error.set(err);
    }) ;
}