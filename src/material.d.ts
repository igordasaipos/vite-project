import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type WebComponentProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  disabled?: boolean
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'md-filled-button': WebComponentProps
      'md-outlined-button': WebComponentProps
      'md-elevated-card': WebComponentProps
      'md-filled-tonal-button': WebComponentProps
      'md-filled-tonal-icon-button': WebComponentProps
      'md-list': WebComponentProps
    }
  }
}
