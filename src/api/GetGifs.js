const API_KEY = "X4wB7YVi48PIiR2hjOIq7XF5adZT9Sp8";
const limite = "10";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${limite}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }) => ({
      id: id,
      title: title,
      url: url,
    })
  );
  return gifs
  console.log(gifs);
};
