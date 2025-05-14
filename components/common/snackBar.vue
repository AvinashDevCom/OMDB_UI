<template>
  <v-snackbar
    :color="getColor"
    :location="lgAndUp?'bottom right':'bottom center'"
    v-model="show"
    timeout="3000"
  >
    <v-row class="px-2" align="center">
      <h4>{{ message }}</h4>
      <v-spacer />
      <v-btn class="ms-3" variant="text" icon small @click="show = false">
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </v-row>
  </v-snackbar>
</template>
<script setup lang="ts">
import { useDisplay } from "vuetify";
import { toastStore } from "~/store/toast";
const snackBarStore = toastStore();
const show = ref(false);
const message = computed(() => {
  return snackBarStore.toastMessage;
});

const getColor = computed(() => {
  return snackBarStore.toastType == "success" ? "success" : "error";
});

const { lgAndUp } = useDisplay();

snackBarStore.$onAction((action: any) => {
  action.after(() => {
    if (action.name == "setSuccess" || action.name == "setError") {
      show.value = true;
    }
  });
});
</script>
