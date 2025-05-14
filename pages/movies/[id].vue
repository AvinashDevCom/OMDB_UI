<template>
  <div>
    <Suspense>
      <template #default>
        <MoviesDetails />
      </template>
      <template #fallback>
        <CommonPageLoader />
      </template>
    </Suspense>
  </div>
</template>
<script setup lang="ts">
const MoviesDetails = defineAsyncComponent(
  () => import("~/components/movies/moviesDetail.vue")
);



const route = useRoute();
</script>
