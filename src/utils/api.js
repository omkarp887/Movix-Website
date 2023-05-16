import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.MOVIX_APP_TMDB_TOKEN;

// const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjczMjc0ODAyNWUyNjdhMTg1OTczZDhkOWUwNWY5OCIsInN1YiI6IjY0NjFlZWU2ZWY4YjMyMDExYjE0N2UyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tWzRv1596dgEBzb32Y-_x1rbiytgh8GT-HyyLs81vMs";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
