<template>
  <v-container fluid>
    <v-row align="center">
      <!-- <v-spacer /> -->
      <v-col cols="6" align="left">
        <MoviesFormForSearch
          v-model:search-title="vmTitle"
          v-model:search-year="vmYear"
          @submit="searchTrigger"
        />
        <!-- v-model:search-genre="vmGenre" -->
      </v-col>
      <v-spacer />
      <v-col cols="12">
        <v-card variant="outlined" rounded="lg">
          <v-data-table-server
            :headers="headersItem"
            :items="moviesItemsList"
            :items-length="moviesItemCount"
            :loading="tableLDR"
            :items-per-page-options="[5, 10, 25, 50, 100]"
            @update:options="paginationFNC"
            @click:row="routeTo"
          >
            <template #header.action>
              <v-btn
                density="compact"
                variant="flat"
                icon="mdi-reload"
                @click="reloadFNC()"
              ></v-btn>
            </template>
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
                height="40vh"
                width="100%"
                aspect-ratio="2/3"
                cover
              ></v-img>
            </template>
            <template #item.action="{ item }">
              <MoviesAddToFavorite
                @click.stop
                :data="item"
                :key="item.imdbID"
                class="ma-1"
              />
            </template>
          </v-data-table-server>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import debounce from "lodash.debounce";
import throttle from "lodash.throttle";
import { useDisplay } from "vuetify";
import { formatDate } from "~/composables/filtersFunction";
import { moviesAPIs } from "~/utils/API/useAPI";
const headersItem = [
  { title: "", key: "Poster", width: "18%" },
  { title: "Id", key: "imdbID" },
  { title: "Title", key: "Title" },
  { title: "Release Year", key: "release_date" },
  { title: "", key: "action" },
];

const rules = [
  (value: any) => {
    if (value) return true;
    return "This field is required";
  },
];

const vmTitle = ref("" as string);
const vmYear = ref("" as string);
const vmGenre = ref("" as string);

const moviesItemCount = ref(0 as number);
const moviesItemsList = ref([] as any[]);
const moviesAPI = moviesAPIs().movies;
const tableLDR = ref(false as boolean);
const reloadFNC = throttle(async () => {
  try {
    tableLDR.value = true;
    let ip: any = await moviesAPI.getMoviesList(
      vmTitle.value,
      vmYear.value,
      pagination.value.page
    );
    moviesItemsList.value = ip?.Search ?? [];
    moviesItemCount.value = parseInt(ip?.totalResults ?? 0);
  } catch (error) {
    console.log(error);
  } finally {
    tableLDR.value = false;
  }
});
onMounted(() => {
  reloadFNC();
});
const pagination = ref({
  page: 1,
  title: "",
  year: "",
  genre: "",
});
watch(pagination.value, (newVal) => {
  reloadFNC();
});
const searchTrigger = debounce(async () => {
  reloadFNC();
}, 500);
function paginationFNC(params: any) {
  pagination.value.page = params?.page;
  console.log(params);
}
const router = useRouter();

function routeTo(event: any, item: any) {
  console.log("ItemRoute", item.item.imdbID);
  router.push(`movies/${item.item.imdbID}`);
}

const { lgAndUp } = useDisplay();
</script>
