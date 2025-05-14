import { defineStore } from "pinia";
import type { moviesItem } from "~/utils/types/moviesInterface";

export const favoriteStore = defineStore(
  "favoriteStore",
  () => {
    const favoriteMovies = ref([] as moviesItem[]);
    // ✅ O(1) lookup using Set
    const favoriteIds = computed(
      () => new Set(favoriteMovies.value.map((m) => m.imdbID))
    );

    function addNewFavorites(movie: moviesItem) {
      if (!favoriteIds.value.has(movie.imdbID)) {
        favoriteMovies.value.push(movie);
      }
    }

    function removeFavorite(movieId: number) {
      favoriteMovies.value = [
        ...favoriteMovies.value.filter((m) => m.imdbID !== movieId),
      ];
    }

    function isFavorite(imdbID: number) {
      return favoriteIds.value.has(imdbID);
    }
    return { favoriteMovies, addNewFavorites, removeFavorite, isFavorite };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
