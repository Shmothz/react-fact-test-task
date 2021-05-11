const flatten = (array) => {
  let ret = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      ret = ret.concat(flatten(array[i]));
    } else {
      ret.push(array[i]);
    }
  }
  return ret;
}
const function2 = (array) => {
  let firstArray = []
  let secondArray = []
  let thirdArray = []
  let firstHelperArray = []
  for (let i = 0; i < array.length; i++) {

    if (array[i] === null) continue
    if (Object.keys(array[i]).length === 0 && array[i].constructor === Object) continue

    const typeDetected = (obj) => {
      if (typeof array[i] === obj.type) {
        obj.array.push(array[i])
      }
    }
    typeDetected({type: 'string', array: secondArray})
    typeDetected({type: 'number', array: firstArray})
    typeDetected({type: 'boolean', array: thirdArray})
    typeDetected({type: 'object', array: firstHelperArray})
  }
  const newArrayArray = []
  const myCustomFilter = (arr) => {
    if (arr.length !== 0) newArrayArray.push(arr)
  }
  myCustomFilter(firstArray)
  myCustomFilter(secondArray)
  myCustomFilter(thirdArray)
  myCustomFilter(firstHelperArray)
  return newArrayArray
}

export const arrayFilter = (array) => { return function2(flatten(array)) }

