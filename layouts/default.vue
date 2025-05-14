<template>
  <client-only>
    <v-app>
      <CommonAppBar />
      <div style="margin-top: 80px"></div>
      <slot />
    </v-app>
  </client-only>
</template>
<script setup lang="ts"></script>
