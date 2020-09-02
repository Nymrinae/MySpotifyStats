<template>
  <v-container style="padding: 72px;">
    <TracksHandler extended />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class TopTracks extends Vue {}
</script>

<style scoped>
</style>