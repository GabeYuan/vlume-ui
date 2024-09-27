import { ExtractPropTypes, PropType } from 'vue'

type ButtonType = 'primary' | 'success' | 'danger' | 'warn' | 'info'

type ButtonSize = 'mini' | 'small' | 'default' | 'large' | 'xl'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: ''
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  gradient: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  square: {
    type: Boolean,
    default: false
  },
  flat: {
    type: Boolean,
    default: false
  },
  link: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
} as const

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export type ButtonEmits = typeof buttonEmits
