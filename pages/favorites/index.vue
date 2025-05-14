<template>
  <v-container fluid>
    <v-row align="center">
      <v-col :cols="lgAndUp ? '2' : '12'" align="left">
        <v-text-field
          rounded="lg"
          v-model="vmSearchField"
          variant="outlined"
          density="compact"
          placeholder="Search"
          append-inner-icon="mdi-magnify"
          clearable
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-card variant="outlined">
          <v-data-table-server
            :search="vmSearchField"
            :headers="headersItem"
            :items="computedFavoritesList"
            :loading="favoriteLDR"
            :items-length="favoritesList.length"
            :items-per-page-options="[5, 10, 25, 50, 100]"
            @click:row="routeTo"
          >
            <template #item.release_date="{ item }">
              <span>{{ item.Year }}</span>
            </template>
            <template #item.Poster="{ item, index }">
              <div style="width: 80px; min-width: 80px" v-if="!lgAndUp">
                <v-img
                  rounded="lg"
                  class="ma-1"
                  :src="item.Poster"
                  width="50%"
                  aspect-ratio="2/3"
                  cover
                ></v-img>
              </div>
              <v-img
                v-else
                rounded="lg"
                class="ma-1"
                :src="item.Poster"
                height="30vh"
                width="100%"
                aspect-ratio="2/3"
                cover
              ></v-img>
            </template>

            <template #item.action="{ item }">
              <v-btn
                variant="tonal"
                density="compact"
                @click="favorites.removeFavorite(item.id), reloadList()"
                icon
              >
                <v-icon size="x-large" color="purple">mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table-server>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { useDisplay } from "vuetify";
import { favoriteStore } from "~/store/favorites";
const favorites = favoriteStore();
const { lgAndUp } = useDisplay();

const favoritesList = ref([] as any);
const favoriteLDR = ref(false as boolean);
const reloadList = () => {
  favoriteLDR.value = true;
  favoritesList.value = [...favorites.favoriteMovies];
  favoriteLDR.value = false;
};

onMounted(() => {
  reloadList();
});

const computedFavoritesList = computed(() => {
  let list = [...favoritesList.value];
  if (!vmSearchField.value) return list;
  const keyword = vmSearchField.value.toLowerCase();

  return list.filter(
    (movie: any) =>
      movie?.Title?.toLowerCase()?.includes(keyword) ||
      movie?.Year?.toLowerCase()?.includes(keyword) ||
      movie?.imdbID?.toString()?.includes(keyword)
  );
});
const vmSearchField = ref("" as string);
const headersItem = [
  { title: "", key: "Poster", width: "18%" },
  { title: "Id", key: "imdbID" },
  { title: "Title", key: "Title" },
  { title: "Release Year", key: "Year" },

  { title: "", key: "action" },
];

const router = useRouter();
function routeTo(event: any, item: any) {
  console.log("ItemRoute", item.item.imdbID);
  router.push(`movies/${item.item.imdbID}`);
}
</script>
