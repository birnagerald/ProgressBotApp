export const ANIME_LIST = "ANIME_LIST";
export const ANIME_LIST_ADD = "ANIME_LIST_ADD";

export const animeList = () => ({
  type: ANIME_LIST,
  data: [
    {
      id: 1,
      title: "Hello"
    },
    {
      id: 2,
      title: "Test"
    }
  ]
});

export const animeListAdd = () => ({
  type: ANIME_LIST_ADD,
  data: {
    id: Math.floor(Math.random() * 100 + 3),
    title: "A new Anime"
  }
});
