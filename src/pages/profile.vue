<template>
  <v-container style="padding-top: 72px;">
    <UserHandler />
    <v-row class="mt-8">
      <v-col cols="1" />
      <v-col cols="12" sm="5">
        <ArtistsHandler displayType="inline" />
      </v-col>
      <v-col cols="12" sm="5">
        <TracksHandler />
      </v-col>
      <v-col cols="1" />
    </v-row>
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