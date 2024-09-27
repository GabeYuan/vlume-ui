import { render } from '@testing-library/vue'
import Button from '../src/button.vue'

describe('Button.vue', () => {
  it('create', () => {
    const { getByRole } = render(Button)
    getByRole('button')
  })

  it('default slot should be "按钮"', () => {
    const { getByText } = render(Button)
    getByText('按钮')
  })

  it('type', () => {
    const { getByRole } = render(Button, {
      props: {
        type: 'primary'
      }
    })

    const button = getByRole('button')
    expect(button.classList.contains('vl-button--primary')).toBe(true)
  })

  it('size', () => {
    const { getByRole } = render(Button, {
      props: {
        size: 'large'
      }
    })

    const button = getByRole('button')
    expect(button.classList.contains('vl-button--large')).toBe(true)
  })

  it('disabled', () => {
    const button = render(Button, {
      props: {
        disabled: true
      }
    }).getByRole('button')

    expect(button.classList.contains('is-disabled')).toBe(true)
  })

  it('gradient', () => {
    const button = render(Button, {
      props: {
        gradient: true
      }
    }).getByRole('button')

    expect(button.classList.contains('is-gradient')).toBe(true)
  })

  it('border', () => {
    const button = render(Button, {
      props: {
        border: true
      }
    }).getByRole('button')

    expect(button.classList.contains('is-border')).toBe(true)
  })

  it('circle', () => {
    const button = render(Button, {
      props: {
        circle: true
      }
    }).getByRole('button')

    expect(button.classList.contains('is-circle')).toBe(true)
  })

  it('square', () => {
    const button = render(Button, {
      props: {
        square: true
      }
    }).getByRole('button')

    expect(button.classList.contains('is-square')).toBe(true)
  })

  it('flat', () => {
    const button = render(Button, {
      props: {
        flat: true
      }
    }).getByRole('button')

    expect(button.classList.contains('is-flat')).toBe(true)
  })

  it('link', () => {
    const button = render(Button, {
      props: {
        link: true
      }
    }).getByRole('button')

    expect(button.classList.contains('is-link')).toBe(true)
  })

  it('text', () => {
    const button = render(Button, {
      props: {
        text: true
      }
    }).getByRole('button')

    expect(button.classList.contains('is-text')).toBe(true)
  })
})
