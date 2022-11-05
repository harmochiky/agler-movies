import {
  configureStore,
  createAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../utils/contants";

const MOVIES_PER_PAGE = 9;

const initialState = {
  popular: {
    movies: [],
    received_movies: [],
    page: 1,
    api_page: 1,
  },
  authData: {
    email: null,
    authenticated: false,
    favourite_movies: [],
  },
};

const return_paginated_movies = (page = 1, movies, current, api_page) => {
  let m_obj = {
    movies: [],
    received_movies: [],
    page: 1,
    api_page: 1,
    ...current,
  };

  let required_movie_length = page * MOVIES_PER_PAGE;

  let fetched_movies = m_obj.received_movies.concat(movies);
  let movies_to_show = [];

  if (required_movie_length <= fetched_movies.length) {
    movies_to_show = fetched_movies.slice(0, page * MOVIES_PER_PAGE);
  }

  m_obj = {
    ...m_obj,
    page: page,
    received_movies: fetched_movies,
    api_page,
    movies: movies_to_show,
  };

  //   fetched_movies.forEach((x, index) => {
  //     if (index + 1 >= page * MOVIES_PER_PAGE) {
  //       movies_to_show.push(fetched_movies[index]);
  //     }
  //   });

  console.log({ movies_to_show });

  return m_obj;
};

const get_movies = async (type, page) => {
  try {
    const { data: response } = await axios.get(
      `/movie/${type}/?api_key=${API_KEY}&language=en-US&page=${page}`,
    );
    return response.results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchMovies = createAsyncThunk(
  "aglet/popular",
  async ({ type, page }, thunkApi) => {
    const {
      aglet: { popular },
    } = thunkApi.getState();

    let required_movie_length = page * MOVIES_PER_PAGE;
    let api_page = popular.api_page;

    if (popular.movies.length === 0) {
      let movies = await get_movies(type, api_page);
      return return_paginated_movies(page, movies, popular, api_page);
    } else {
      if (required_movie_length <= popular.received_movies.length) {
        return return_paginated_movies(page, [], popular, api_page);
      } else {
        let next_api_page = api_page + 1;
        let movies = await get_movies(type, next_api_page);
        return return_paginated_movies(page, movies, popular, next_api_page);
      }
    }
  },
);

export const setAuthData = createAsyncThunk(
  "aglet/user_auth",
  async (token, thunkApi) => {
    console.log({ userRe: token });

    return null;
  },
);

export const fetchFavMovies = createAsyncThunk(
  "aglet/favourites",
  async ({ authenticated }, thunkApi) => {
    const {
      aglet: { authData },
    } = thunkApi.getState();
    try {
      let movies = await axios.get("http://localhost:5000/api/favourites");
      return {
        ...authData,
        favourite_movies: movies.data,
      };
    } catch (err) {
      console.log(err);
      return authData;
    }
  },
);

const AgletSlice = createSlice({
  name: "Aglet",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.popular = action.payload;
    });
    builder.addCase(fetchFavMovies.fulfilled, (state, action) => {
      state.authData = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    aglet: AgletSlice.reducer,
  },
});

export const {} = AgletSlice.actions;
