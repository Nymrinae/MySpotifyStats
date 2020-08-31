<template>
  <v-container style="padding: 72px;">
    nique ta mere reyken
    <!-- <UserHandler />
    <v-row class="mt-8">
      <v-col cols="1" />
      <ArtistsHandler displayType="inline" />
      <TracksHandler />
      <v-col cols="1" />
    </v-row> -->
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  head: {
    title: 'MySpotifyStats - Profile'
  }
})
export default class Profile extends Vue {

}
</script>

<style scoped>
</style>