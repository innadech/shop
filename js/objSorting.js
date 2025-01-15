const objectsList = [{ x: 42 }, { x: 33 }, { x: 101 }, { x: 21 }, { x: 333 }]

function compareObjects(objA, objB) {
  return objA.x - objB.x
}

const sortedObjects = objectsList.toSorted(compareObjects)

const reversedObject = sortedObjects.toReversed()

sortedObjects

reversedObject

console.log({} - {})

// const sortedObjects = objectsList.toSorted()

// sortedObjects

// objectsList.x

// objectsList[0].x

// const numbers = [4, 3, 1, 2, 7]
// const letters = ['g', 'c', 'a', 'b', 'i']

// // const numbers = ['aaaa', 'aab']

const numbers = [42, 33, 101, 21, 333]

const sortedNumbers = numbers.toSorted(compareNumbers)

sortedNumbers

function compareNumbers(a, b) {
  return a - b
}

function compareWords(a, b) {
  return a.length - b.length
}

const words = ['hello', 'gfgsdjhgsldgj', '!', 'foobar', 'oye']

const sortedWords = words.toSorted(compareWords)

sortedWords

// [42, 33, 101, 21, 333]
// [33, 42, 101, 21, 333]
// [33, 42, 101, 21, 333]
// [33, 42, 21, 101, 333]
// [33, 21, 42, 101, 333]
// [21, 33, 42, 101, 333]

// console.log(compareNumbers(3, 4))

// console.log(compareNumbers(4, 3))

// console.log(compareNumbers(3, 3))

// console.log(compareNumbers(333, 111))

// console.log(compareNumbers(111, 333))
