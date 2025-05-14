<template>
  <div>
    <v-btn
      class="mt-3"
      height="32px"
      variant="tonal"
      density="compact"
      @click="addFavorites"
      color="purple"
    >
      <v-icon
        size="x-large"
        color="purple"
        :icon="!isInFavorites ? 'mdi-plus' : 'mdi-minus'"
      />

      <span class="font-weight-medium text-capitalize"> WatchList </span>
    </v-btn>
  </div>
</template>
<script setup lang="ts">
import { favoriteStore } from "~/store/favorites";
import { toastStore } from "~/store/toast";
import type { moviesItem } from "~/utils/types/moviesInterface";

const props = defineProps({
  data: {
    type: Object as () => moviesItem,
    default: () => ({}),
    required: true,
  },
});
const snackbar = toastStore();
const favorites = favoriteStore();

const isInFavorites = ref(false as boolean);
onMounted(() => {
  checkFavoriteMovies();
  console.log("isInFavorites", isInFavorites.value);
});
function checkFavoriteMovies() {
  isInFavorites.value = favorites.favoriteMovies.some(
    (item) => item.imdbID === props.data?.imdbID
  );
}
function addFavorites() {
  if (!isInFavorites.value) {
    favorites.addNewFavorites(props.data as moviesItem);
    snackbar.setSuccess("Added to favorites");
  } else {
    favorites.removeFavorite(props.data?.imdbID as number);
    snackbar.setError("Removed from favorites");
  }
  checkFavoriteMovies();
}
</script>
