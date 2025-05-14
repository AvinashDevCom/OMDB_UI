<template>
  <div>
    <v-container fluid>
      <v-row align="center">
        <v-col cols="12">
          <slot name="HeaderTitle"></slot>
          <v-row
            :class="(props.breadCrumbsItems ?? []).length > 0 ? 'my-1' : 'my-1'"
          >
            <v-col>
              <span
                v-for="(item, index) in props.breadCrumbsItems"
                :key="index"
              >
                <span
                  @click="handleClick(item, index)"
                  :class="!!item?.active ? 'text-primaryColor' : ''"
                  style="list-style-type: none; cursor: pointer"
                >
                  {{ item.name }}
                </span>
                <span
                  class="ml-3 mr-3"
                  v-if="index !== (props.breadCrumbsItems ?? []).length - 1"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </span>
              </span>
            </v-col>
          </v-row>
          <!-- <v-breadcrumbs prepend-icon="mdi-home" :items="breadCrumbs">
            <template #prepend>
              <v-icon
                color="primaryColor"
                icon="mdi-home"
                size="small"
              ></v-icon>
            </template>
            <template #divider>
              <v-icon color="#8B8D97" icon="mdi-slash-forward"></v-icon>
            </template>
            <template #title="{ item }">
              <span class="registrationSubtitle"> {{ item.title }}</span>
            </template>
          </v-breadcrumbs> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
interface BreadCrumb {
  title: string;
  disabled: boolean;
  href: string;
}
interface breadCrumbsItemsType {
  name: string;
  to?: {
    path: string;
    query?: {};
  };
  active?: boolean;
}
const props = defineProps({
  breadCrumbs: {
    type: Array as PropType<BreadCrumb[]>,
  },
  breadCrumbsItems: {
    type: Array as PropType<breadCrumbsItemsType[]>,
  },
});
//COMPUTED

const router = useRouter();
//FUNCTION
function handleClick(item: any, index: number) {
  if (item.to) {
    router.push(item.to);
  }
}
</script>
