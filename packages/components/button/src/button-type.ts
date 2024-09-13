import { ExtractPropTypes, PropType } from 'vue'

type ButtonType = 'primary' | 'success' | 'danger' | 'warn' | 'info'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'secondary'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
