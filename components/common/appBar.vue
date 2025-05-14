<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-btn icon="mdi-home" color="purple" @click="routeToHome()"></v-btn>
    </template>
    <v-app-bar-title @click="router.push('/')">TMDB</v-app-bar-title>
    <template v-slot:append>
      <v-badge color="success" :content="noOfFavorites" class="ma-4">
        <v-btn
          icon="mdi-playlist-plus"
          color="purple"
          @click="routeTOFavorites()"
        ></v-btn>
      </v-badge>
    </template>
  </v-app-bar>
</template>
<script setup lang="ts">
import { favoriteStore } from "~/store/favorites";

const router = useRouter();
const favorites = favoriteStore();
const noOfFavorites = computed(() => {
  return favorites.favoriteMovies?.length ?? 0;
});
function routeTOFavorites() {
  router.push("/favorites");
}
function routeToHome() {
  router.push("/");
}
</script>
