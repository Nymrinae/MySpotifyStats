<template>
    <client-only>
    <v-app id="app" no-gutters>
      <nuxt />
    </v-app>
  </client-only>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class LoginLayout extends Vue {}
</script>

<style scoped>
</style>