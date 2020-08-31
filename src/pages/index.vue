<template>
  <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <Login />
      </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Mutation ,Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'login'
})
export default class Index extends Vue {
  @Mutation setLoggedState!: any

  mounted() {
    if (Object.keys(this.$route.query).length) {
      const { access_token, refresh_token } = this.$route.query

      this.$cookies.set('spotifyAccessToken', access_token)
      this.$cookies.set('spotifyRefreshToken', refresh_token)

      this.setLoggedState()
      this.$router.replace({ path: '/profile' })
    }
  }
}
</script>

<style scoped>
</style>