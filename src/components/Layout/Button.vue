<template>
  <div
    :class="`btn btn-${size} ${offset ? 'offset' : ''}`"
    @click="goToPath"
  >
    {{ content }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop({ required: true }) private readonly content!: string
  @Prop({ default: 'medium' }) private readonly size!: string
  @Prop({ default: false }) private readonly offset!: boolean
  @Prop() private readonly href!: string

  private goToPath(): void {
    if (this.href) {
      this.$router.push(this.href)
    }
  }
}
</script>

<style scoped>
.btn {
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  border: 1px solid white;
  border-radius: 30px;
  padding: 12px 24px;
  cursor: pointer;
}

.btn-small {
  width: 120px;
  padding: 12px 12px;
}

.offset {
  margin-left: 36px;
}

.btn:hover {
  background-color: white;
  color: #000;
  transition: .2s linear;
}
</style>