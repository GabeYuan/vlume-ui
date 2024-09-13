<template>
  <button :class="['vl-button', `vl-button--${props.type}`]">
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { buttonProps } from './button-type'

defineOptions({
  name: 'VlButton'
})

const props = defineProps(buttonProps)
</script>

<style lang="scss">
@import url(./button.scss);
</style>
