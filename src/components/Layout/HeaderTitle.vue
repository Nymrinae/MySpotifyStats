<template>
  <v-row class="centerVertically mb-4">
    <v-col
      :cols="isTopRoute ? '12' : '8'"
      xl="8"
      style="padding-left: 0px !important;">
      <h3
        class="sectionTitle"
        :class="{ 'centerHorizontally': $vuetify.breakpoint.xs && isTopRoute }"
        v-html="title"
      />
    </v-col>
    <v-col
      :cols="isTopRoute ? '12': '4'"
      xl="4"
      :class="`${isTopRoute ? 'margin-left: 0px !important' : ''}`"
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
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class HeaderTitle extends Vue {
  @Prop({ required: true }) private readonly title!: string;
  @Prop({ default : '' }) private readonly type!: string;
  @Prop({ type: Boolean, default: false }) private readonly extended!: boolean;

  get isTopRoute(): boolean {
    return this.$route.path.startsWith('/top')
  }
}
</script>