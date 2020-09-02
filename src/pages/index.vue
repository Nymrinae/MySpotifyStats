<template>
  <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <Login />
      </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { getHashParams } from '@/api/auth'

@Component({
  layout: 'login'
})
export default class Index extends Vue {
  mounted() {
    const params = getHashParams()

    if (Object.keys(params).length) {
      const { access_token, state } = params

      if (state === this.$cookies.get('spotify_auth_state')) {
        this.$cookies.remove('spotify_auth_state')
        this.$cookies.set('spotifyAccessToken', access_token)
        this.$router.replace({ path: '/profile' })
      }
    }
  }
}
</script>

<style scoped>
</style>