'use strict'

const nativeSort = Array.prototype.sort

/* eslint-disable no-extend-native */
/**
 * Returns a copy of the sorted array when copy is passed through
 * @param {function} compareFn
 * @param {boolean} copy
 */
Array.prototype.sort = function (compareFn, copy) {
  if (copy) {
    return nativeSort.call(this.slice(), compareFn)
  }
  return nativeSort.call(this, compareFn)
}
