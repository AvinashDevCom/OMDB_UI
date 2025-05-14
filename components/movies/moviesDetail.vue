<template>
  <v-container fluid>
    <CommonHeader
      :bread-crumbs-items="[
        {
          name: 'Movies',
          to: {
            path: '/',
          },
        },
        {
          name: data?.Title || '',
          to: {
            path: `/movies/${data?.imdbID || null}`,
          },
          active: true,
        },
      ]"
      :bread-crumbs="breadCrumbs"
    >
      <template #HeaderTitle>
        <h2>Movies's Details</h2>
      </template>
    </CommonHeader>
    <v-row align="center" v-if="status === 'pending'">
      <v-col cols="12">
        <p>...Loading</p>
      </v-col>
    </v-row>
    <v-row align="center" v-else-if="error">
      <v-col cols="12">
        <p>Error: {{ error.message }}</p>
      </v-col>
    </v-row>
    <v-row align="center" v-else>
      <v-col :cols="lgAndUp ? '4' : '12'" align-self="center">
        <v-img
          :class="lgAndUp ? 'ma-1' : ''"
          :rounded="lgAndUp ? 'xl' : 'lg'"
          :src="data?.Poster"
          aspect-ratio="16/9"
          cover
          :height="lgAndUp ? '85vh' : '72vh'"
          width="100%"
          style="background-color: #fff"
        />
      </v-col>
      <v-col :cols="lgAndUp ? '8' : '12'" align="left" align-self="start">
        <h3 :class="lgAndUp ? 'text-h3' : 'text-h4'">
          {{ data?.Title }} ({{ data?.Year }})
        </h3>
        <v-row>
          <v-col :cols="lgAndUp ? '2' : '6'" align="left">
            <v-chip class="mt-3">
              <v-icon left color="rgb(245, 197, 24)" size="x-large">
                mdi-star
              </v-icon>
              <span class="text-h6"> {{ data?.imdbRating }}/10 </span>
            </v-chip>
          </v-col>
          <v-col
            :cols="lgAndUp ? '3' : '6'"
            :align="lgAndUp ? 'left' : 'right'"
          >
            <MoviesAddToFavorite
              :data="
                data || {
                  imdbID: '',
                  Title: '',
                  Year: '',
                  overview: '',
                  Poster: '',
                  imdbVotes: '',
                  imdbRating: '',
                  Plot: '',
                }
              "
            />
          </v-col>
        </v-row>
        <p class="mt-4 text-h6">{{ data?.Plot }}</p>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { useDisplay } from "vuetify";
import { favoriteStore } from "~/store/favorites";
import { toastStore } from "~/store/toast";
import { moviesAPIs } from "~/utils/API/useAPI";
import type { moviesItem } from "~/utils/types/moviesInterface";
const moviesAPI = moviesAPIs().movies;
const route = useRoute();
const movieId = Array.isArray(route.params.id)
  ? route.params.id[0]
  : route.params.id;
const userId = computed(() => `user-${route.params.id}`);
const { data, status, error } = await useAsyncData(userId, () =>
  moviesAPI.getMoviesDetails(movieId)
);

const { lgAndUp } = useDisplay();

const breadCrumbs = [
  {
    title: "",
    disabled: true,
    href: "breadcrumbs_dashboard",
  },
  {
    title: "Page",
    disabled: true,
    href: "breadcrumbs_dashboard",
  },
];
</script>
<style scoped></style>
