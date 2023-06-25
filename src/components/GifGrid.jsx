import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // const [gifs, setGifs] = useState([]);
  // const [cargando, setCargando] = useState(true);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const gifs = await getGifs(category);
  //   setGifs(gifs);
  //   setCargando(false);
  // };

  /* CONVIRTIENDO LA LOGICA ANTERIOR EN UN CUSTOM HOOK */
  const { gifs, cargando } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      {!cargando ? (
        <div className="card-grid">
          {gifs.map((gifs) => (
            <GifItem key={gifs.id} {...gifs} />
          ))}
        </div>
      ) : (
        <h4>Cargando...</h4>
      )}
    </>
  );
};
