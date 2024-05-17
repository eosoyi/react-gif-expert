import React from "react";
import Gifs from "../utils/Gifs";

interface Props {
    item: Gifs
}

export const GifGridItem: React.FC<Props> = ({ item }) => {
    return (
        <div className="card">
            <img src={item.url} alt={item.title} />
            <p>{item.title}</p>
        </div>
    )
}