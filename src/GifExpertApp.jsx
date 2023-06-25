import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (param) => {
    //   Validar que no existan categorias repetidas
    // Forma 1
    const UpperCase = () => categories.map((x) => x.toUpperCase());
    const categoriesUpper = UpperCase();

    if (categoriesUpper.includes(param.toUpperCase())) return;

    // Formas de agg una nueva categoria
    //   Primera forma
    //   setCategories((cate) => [cate, param ]);

    //   Segunda forma
    setCategories([param.toUpperCase(), ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        setCategories={setCategories}
        categories={categories}
        onNewValue={(value) => onAddCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
