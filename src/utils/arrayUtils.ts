export function isArrayEmpty<T = null>(arr: Array<T> | null | undefined) {
  return Array.isArray(arr) && arr.length === 0;
}

export function isLastIndex<T = null>(arr: Array<T>, index: number) {
  return Array.isArray(arr) && arr.length - 1 === index;
}

export function createGroupsFromArray<T = null>(array: Array<T>, size: number) {
  return Array.from(new Array(Math.ceil(array.length / size)), (item, index) =>
    array.slice(index * size, index * size + size)
  );
}
