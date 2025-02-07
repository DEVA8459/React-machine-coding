export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWE0MDEzNmI2NjhlMDRlNGI4ZGJhZmRhZGQxNjlhZiIsIm5iZiI6MTczODY0NDQ3Mi4yNTIsInN1YiI6IjY3YTE5YmY4OWEyNGZjYTY2MDI2MTJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oH4tIuOG3m6Hg9jOL-X-YUt-AVD_aha3M3joru7gghQ",
  },
};

export const POPULAR_MOVIES_URL=`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`

export const TOP_RATED_MOVIES=`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`

export const UPCOMING_MOVIES=`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`

export const TRENDING =`https://api.themoviedb.org/3/trending/all/day?language=en-US`
export const TV_TOP_RATED =`https://api.themoviedb.org/3/trending/tv/day?language=en-US`


export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "english" },
  { identifier: "हिंदी", name: "हिंदी" },
  { identifier: "संस्कृत", name: "संस्कृत" },
  { identifier: "मराठी", name: "मराठी" },
  { identifier: "भोजपुरी", name: "भोजपुरी" },
];

