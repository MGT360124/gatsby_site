export const easing = Object.freeze({
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  })
  
  export const duration = Object.freeze({
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
    short: 250,
    shorter: 200,
    shortest: 150,
    standard: 300,
  })

  export default function(
    props: string [] | string = 'all',
    during: number = duration.standard,
    timing: string = easing.easeInOut,
    delay: number = 0,
  ) {
    return `${(Array.isArray(props) ? props : [props])
      .map((animatedProp: string) => `${animatedProp} ${`${during}ms`} ${timing} ${`${delay}ms`}`)
      .join(',')}`
  }
  