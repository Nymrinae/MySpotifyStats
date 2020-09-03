<template>
  <v-row class="centerVertically mb-4">
    <v-col
      :cols="excludeProfileRoute ? '12' : '8'"
      sm="6"
      lg="8"
    >
      <h3
        class="sectionTitle truncateText"
        :class="{ 'centerHorizontally': $vuetify.breakpoint.xs && excludeProfileRoute }"
        v-html="title"
      />
    </v-col>
    <v-col
      v-if="currentRouteName !== 'history'"
      :cols="isTopRoute ? '12': '4'"
      sm="4"
      lg="4"
      :class="`${isTopRoute ? 'px-0 py-4 mx-n2' : ''}`"
      :style="`${isTopRoute ? 'min-width: 300px;' : ''}`"
    >
      <TimeRangeSwitcher v-if="extended && type" :type="type" />
      <Button
        v-if="!extended && type"
        content="See more"
        :href="type === 'artist' ? '/topartists' : '/toptracks'"
        size="small"
        style="float: right;"
        offset
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"

@Component
export default class Header extends Vue {
  @Prop({ required: true }) private readonly title!: string;
  @Prop({ default : '' }) private readonly type!: string;
  @Prop({ type: Boolean, default: false }) private readonly extended!: boolean;

  get isTopRoute(): boolean {
    return this.$route.path.startsWith('/top')
  }

  get excludeProfileRoute(): boolean {
    return this.$route.name !== 'profile'
  }

  get currentRouteName(): string {
    return this.$route.name!
  }
}
</script>