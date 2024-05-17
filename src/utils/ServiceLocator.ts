import Gifs from "./Gifs";

class ServiceLocator {

    async getGifs(category: string) {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=WqwDk922vQcM4Kb33Hz72L2qUAi9mOTN&q=${category}&limit=10`;

        const response = await fetch(url);

        if(!response.ok){
            throw new Error('No ha sido posible obtener resultados.');
        }

        const { data } = await response.json();

        const gifs: Gifs[] = data.map((img: any) => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
        return gifs;
    }


}

export default ServiceLocator;