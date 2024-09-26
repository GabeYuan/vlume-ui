<template>
  <button :class="buttonCls" @click="handleClick">
    <span :class="[ns.e('text')]">
      <slot>按钮</slot>
    </span>
  </button>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { buttonEmits, buttonProps } from './button-type'
import { useNamespace } from '@vlume-ui/hooks'

defineOptions({
  name: 'VlButton'
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const ns = useNamespace('button')

const buttonCls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.is('disabled', props.disabled),
  ns.is('border', props.border),
  ns.is('circle', props.circle),
  ns.is('square', props.square),
  ns.is('flat', props.flat),
  ns.is('link', props.link),
  ns.is('gradient', props.gradient)
])

const handleClick = (evt: MouseEvent) => {
  if (props.disabled) {
    evt.stopPropagation()
    return
  }

  emit('click', evt)
}
</script>

<style lang="scss">
@import url(./button.scss);
</style>
