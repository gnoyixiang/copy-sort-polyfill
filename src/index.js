'use strict'

const nativeSort = Array.prototype.sort

/* eslint-disable no-extend-native */
Array.prototype.sort = function (compareFn, mutate = true) {
  if (mutate) {
    return nativeSort.call(this, compareFn)
  }
  return nativeSort.call(this.slice(), compareFn)
}
