import type {
  getMoviesDetails,
  movieList,
} from "~/utils/types/moviesInterface";

export const moviesService = () => {
  const config = useRuntimeConfig();
  const yourApiKey = config.public.yourApiKey;
  return {
    getMoviesList: async (
      title: string,
      year: string,
      page: number | string
    ) => {
      try {
        let titleParams = !!title ? `&s=${title}` : `&s=${"The Matrix"}`;
        let yearParams = !!year ? `&y=${year}` : "";
        let pageParams = !!page ? `&page=${page}` : "";
        let ip: movieList = await $fetch(
          `/api_base/?apikey=${yourApiKey}` +
            titleParams +
            yearParams +
            pageParams,
          {
            method: "GET",
          }
        );
        if (ip?.Response === "True") {
          return ip;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getMoviesDetails: async (moviesId: number | null | string) => {
      try {
        console.log(moviesId, "moviesId");

        let moviesParams = !!moviesId ? `&i=${moviesId}` : "";
        let ip: getMoviesDetails = await $fetch(
          `/api_base/?apikey=${yourApiKey}` + moviesParams,
          {
            method: "GET",
          }
        );
        console.log(ip, "getMoviesDetails");

        if (ip?.Response === "True") {
          return ip;
        }
      } catch (error) {
        console.log(error);
      }
    },
  };
};
