import { apiUrl, imageUrl } from "./config";

export const fetchItem = async () => {
    const response = await fetch(apiUrl);
        
    if (!response.ok) {
        throw new Error("Network respons is not ok");
    }
    return await response.json();
}

export const getImageUrl = (name: string) => {
    return `${imageUrl}?${name}`;
}