<template>
  <v-container style="padding-top: 72px;">
    <UserHandler />
    <v-row class="mt-sm-8 mb-4">
      <v-col cols="0" lg="1" />
      <v-col cols="12" md="6" lg="5">
        <ArtistsHandler displayType="inline" />
      </v-col>
      <!-- <v-spacer /> -->
      <v-col cols="12" md="6" lg="5">
        <TracksHandler />
      </v-col>
      <v-col cols="0" lg="1" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  head: {
    title: 'MySpotifyStats - Profile'
  },
  middleware: 'auth'
})
export default class Profile extends Vue {}
</script>

<style scoped>
</style>