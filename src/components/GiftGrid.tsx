import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

interface Props {
    category: string
}

export const GiftGrid: React.FC<Props> = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h3>cargando...</h3>

            }
            <div className="card-grid">
                {
                    images && images.map((img) => {
                        return <GifGridItem key={img.id} item={img}></GifGridItem>
                    })
                }
            </div>
        </>
    )
}
