import { moviesService } from "~/service/moviesService";

export const moviesAPIs = () => {
  return {
    movies: moviesService(),
  };
};
