import { css } from 'styled-components'
import { spacing } from './variables'
import Media from './media'

/**
 * NOTE: hidden element when the screen was smaller than 480px
 */
export const hideSMDown = css`
  ${Media.lessThan(Media.small)} {
    display: none;
  }
`
export const hideSMUp = css`
  ${Media.greaterThan(Media.small)} {
    display: none;
  }
`
export const hideMDDown = css`
  ${Media.lessThan(Media.medium)} {
    display: none;
  }
`
export const hideLGDown = css`
  ${Media.lessThan(Media.large)} {
    display: none;
  }
`
export const fullWidthAtMobile = css`
  @media (max-width: 768px) {
    width: auto;
    margin: 0 ${spacing.base};
  }
`
export const textEllipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const multiLineTextEllipsis = (line: string) => {
  return css`
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
  `
}
export function placeholder(color: string) {
  return css`
    ::-moz-placeholder {
      color: ${color};
      opacity: 1;
    }
    :-ms-input-placeholder {
      color: ${color};
    }
    ::-webkit-input-placeholder {
      color: ${color};
    }
  `
}
