<template>
  <v-dialog max-width="600">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        rounded="lg"
        v-bind="activatorProps"
        class="text-capitalize"
        color="black"
      >
        Search Movie
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card width="100%" height="100%">
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h5 Font-weight-bold">Search Movie</div>

          <v-btn
            icon="mdi-close"
            variant="text"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-title>
        <v-form @submit.prevent="submitParams">
          <v-container>
            <v-row align="center" :no-gutters="!lgAndUp">
              <v-col :cols="lgAndUp ? '6' : '12'">
                <v-text-field
                  v-model="searchTitle"
                  :rules="rules"
                  density="compact"
                  variant="outlined"
                  placeholder="Title"
                  rounded="lg"
                ></v-text-field>
              </v-col>
              <v-col :cols="lgAndUp ? '6' : '12'">
                <v-text-field
                  v-model="searchYear"
                  :rules="rules"
                  density="compact"
                  variant="outlined"
                  rounded="lg"
                  placeholder="Year"
                ></v-text-field>
              </v-col>
              <!-- <v-col :cols="lgAndUp ? '6' : '12'">
                <v-text-field
                  v-model="searchGenre"
                  :rules="rules"
                  density="compact"
                  variant="outlined"
                  rounded="lg"
                  placeholder="Genre"
                ></v-text-field>
              </v-col> -->
            </v-row>
            <v-row :no-gutters="!lgAndUp">
              <v-spacer />
              <v-col :cols="lgAndUp ? '2' : '12'">
                <v-btn
                  rounded="lg"
                  class="mt-2"
                  variant="outlined"
                  width="100%"
                  :readonly="enableSubmitBTN"
                  @click="clearParams(), (isActive.value = false)"
                >
                  Clear
                </v-btn>
              </v-col>
              <v-col :cols="lgAndUp ? '2' : '12'">
                <v-btn
                  rounded="lg"
                  class="mt-2"
                  width="100%"
                  color="black"
                  type="submit"
                  @click="isActive.value = false"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </template>
  </v-dialog>
</template>
<script setup lang="ts">
import { useDisplay } from "vuetify";
import { toastStore } from "~/store/toast";
const { lgAndUp } = useDisplay();

const rules = [
  (value: string) => {
    if (value) return true;
    return "This field is required";
  },
];
const searchTitle = defineModel("searchTitle", { type: String, default: "" });
const searchYear = defineModel("searchYear", { type: String, default: "" });
const searchGenre = defineModel("searchGenre", { type: String, default: "" });

//computed
const enableSubmitBTN = computed(() => {
  return !(!!searchTitle.value || !!searchYear.value || !!searchGenre.value);
});
// Emits
const emits = defineEmits<{
  (event: "submit"): void;
  (event: "clear"): void;
}>();

const snackbar = toastStore();
//Function
function submitParams() {
  if (enableSubmitBTN.value) {
    snackbar.setError("Fill any one of the fields");
    return;
  }
  emits("submit");
  
}
function clearParams() {
  searchTitle.value = "";
  searchYear.value = "";
  searchGenre.value = "";

  emits("clear");
}
</script>
