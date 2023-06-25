import { useState } from "react";

export const AddCategory = ({ setCategories, onAddCategory, categories, onNewValue }) => {
  const [inputValue, setInputValuet] = useState();

  const onChange = ({ target: { value } }) => setInputValuet(value);

  const onSubmit = (event) => {
    event.preventDefault();
    //   Validación
    if (inputValue.trim().length < 1) return;

    //   Forma 1: necesitando categories como props
    //   setCategories([...categories, inputValue]);

    //   Forma 2: sin necesitar categories como props
    // setCategories((categorie) => [...categorie, inputValue]);

    //   Forma 3: con la funcion onNewValue
    onNewValue(inputValue)
      
    //   Limpiando input
    setInputValuet("");
  };

  return (
    <>     
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onChange}
        />
      </form>
    </>
  );
};
