
interface Min {
    min: number
    max: number 
}
class Media {
    static xsmall = Symbol('xsmall')
    static small = Symbol('small')
    static medium = Symbol('medium')
    static large = Symbol('large')
    static xlarge = Symbol('xlarge')
    static sizeMap: Map<symbol, Min|any>  = new Map([
      [Media.xsmall, { min: 0, max: 599 }],
      [Media.small, { min: 600, max: 779 }],
      [Media.medium, { min: 780, max: 979 }],
      [Media.large, { min: 980, max: 1279 }],
      [Media.xlarge, { min: 1280, max: 1339 }],
    ])
    static between(smallKey: symbol, largeKey: symbol) {
      if (!this.sizeMap.has(smallKey) || !this.sizeMap.has(largeKey)) {
        throw new Error('Media does not have these sizes')
      }
      const smallSize = this.sizeMap.get(smallKey).min
      const largeSize = this.sizeMap.get(largeKey).max
      return `@media (min-width: ${smallSize}px) and (max-width: ${largeSize}px)`
    }
    static greaterThan(key: symbol) {
      if (!this.sizeMap.has(key)) {
        throw new Error('Media does not have this size')
      }
      return `@media (min-width: ${this.sizeMap.get(key).min}px)`
    }
    static lessThan(key: symbol) {
      if (!this.sizeMap.has(key)) {
        throw new Error('Media does not have this size')
      }
      return `@media (max-width: ${this.sizeMap.get(key).min - 1}px)`
    }
    static size(key: symbol) {
      if (!this.sizeMap.has(key)) {
        throw new Error('Media does not have this size')
      }
      return this.between(key, key)
    }
  }
  
  export default Media
  