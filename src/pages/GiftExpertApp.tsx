import React, { useState } from "react";
import AddCategory from "../components/AddCategory";
import { GiftGrid } from "../components/GiftGrid";

const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory: string) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />
            <ol>
                {categories.map(item => {
                    return (
                        <GiftGrid key={item} category={item} ></GiftGrid>
                    )
                })}
            </ol>

        </>
    )
}

export default GiftExpertApp;