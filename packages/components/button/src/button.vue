<template>
  <button :class="buttonCls">
    <span :class="[ns.e('text')]">
      <slot />
    </span>
  </button>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { buttonProps } from './button-type'
import { useNamespace } from '@vlume-ui/hooks'

defineOptions({
  name: 'VlButton'
})

const props = defineProps(buttonProps)

const ns = useNamespace('button')

const buttonCls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.is('border', props.border),
  ns.is('circle', props.circle),
  ns.is('square', props.square),
  ns.is('gradient', props.gradient)
])
</script>

<style lang="scss">
@import url(./button.scss);
</style>
