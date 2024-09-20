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
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
