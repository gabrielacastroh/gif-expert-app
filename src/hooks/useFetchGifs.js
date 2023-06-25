import { getGifs } from "../api/GetGifs";
import { useEffect, useState } from "react";

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const gifsData = await getGifs(category);
        setGifs(gifsData);
        setCargando(false);
    };

    return { gifs, cargando };


}
