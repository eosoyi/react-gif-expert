import { useEffect, useState } from "react";
import Gifs from "../utils/Gifs";
import ServiceLocator from "../utils/ServiceLocator";

export const useFetchGifs = (category: string) => {
    const serviceLocator = new ServiceLocator();
    const [images, setImages] = useState<Gifs[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getGifs = async () => {
        try {
            const response = await serviceLocator.getGifs(category);
            setImages(response);
        } catch (error) {
            console.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getGifs();
    }, []);

    return {
        images: images,
        isLoading
    }

}