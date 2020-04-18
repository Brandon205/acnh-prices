export default function quicksort(arr, lo = 0, hi=null) {
    if (hi === null) {
      hi = arr.length - 1
    }
    if (lo < hi) {
      let pivot = part(arr, lo, hi)
      quicksort(arr, lo, pivot)
      quicksort(arr, pivot + 1, hi)
    }
    return arr;
}
  
  function part(arr, lo, hi) {
    var pivot = arr[Math.floor(lo + (hi - lo) / 2)].price;
    var i = lo - 1
    var j = hi + 1
    while (true) {
      do {
        i++
      } while (arr[i].price < pivot)
      do {
        j--
      } while (arr[j].price > pivot) 
      if (i >= j) {
        return j
      }
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
}