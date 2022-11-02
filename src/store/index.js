import {
  configureStore,
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
    todisplay: 9,
    total_movies: 0,
    max_movies: 45,
  },
  authData: {
    email: null,
    authenticated: false,
  },
  favourites: [],
};

const return_paginated_movies = (page = 1, movies, current, api_page) => {
  let m_obj = {
    movies: [],
    received_movies: [],
    page: 1,
    api_page: 1,
    todisplay: 9,
    total_movies: 0,
    max_movies: 45,
    ...current,
  };

  let fetched_movies = m_obj.received_movies.concat(movies);
  let movies_to_show = [];
  movies_to_show = fetched_movies.slice(0, page * MOVIES_PER_PAGE);

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

// get the initial movies and load the initial 9
// on press next load the local 9
// on press next check if the local has available 9 else fecth more to load more 9

const should_load_next = () => {
  let confirmed = false;
  return confirmed;
};

export const fetchMovies = createAsyncThunk(
  "aglet/popular",
  async ({ type, page }, thunkApi) => {
    const {
      aglet: { popular },
    } = thunkApi.getState();

    if (should_load_next()) {
    } else {
    }

    let api_page = popular.api_page;

    let movies = await get_movies(type, api_page);

    return return_paginated_movies(page, movies, popular, api_page);
  },
);

const AgletSlice = createSlice({
  name: "Aglet",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.popular = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    aglet: AgletSlice.reducer,
  },
});

export const {} = AgletSlice.actions;
