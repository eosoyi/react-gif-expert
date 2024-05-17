import React, { useState } from "react";

interface Props {
    onNewCategory: (value: string) => void,
}

const AddCategory: React.FC<Props> = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // evita renderizar la pagina
        event.preventDefault();
        const value = inputValue.trim();
        // validamos que lo ingresaro no posea solo un caracter
        if (value.length <= 1) {
            return;
        }
        onNewCategory(value);
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onsubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gift..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

export default AddCategory;