const numbers = [1, 2, 3, 4, 5];
const strings = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// For Each
function myEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

myEach(numbers, (element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});

// Map
function myMap(arr, callback) {
  const mappedArr = [];
  for (let i = 0; i < arr.length; i++) {
    mappedArr.push(callback(arr[i], i, arr));
  }
  return mappedArr;
}

const squaredNumbers = myMap(numbers, (element) => {
  return element * element;
});

console.log(squaredNumbers);

// Filter
function myFilter(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

const evenNumbers = myFilter(numbers, (element) => {
  return element % 2 === 0;
});

console.log(evenNumbers);

// Some
function mySome(nums, callback) {
  for (let i = 0; i < nums.length; i++) {
    if (callback(nums[i], i, nums)) {
      return true;
    }
  }
  return false;
}
const even = mySome(numbers, (element) => {
  return element % 2 === 0;
});

console.log(even);

// Every
function myEvery(nums, callback) {
  for (let i = 0; i < nums.length; i++) {
    if (!callback(nums[i], i, nums)) {
      return false;
    }
  }
  return true;
}

const underThreshold = myEvery(numbers, (element) => {
  return element < 5;
});

console.log(underThreshold);

// Reduce
function myReduce(arr, callback) {
  let accumulator = arr[0];

  for (let i = 1; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

const sum = myReduce(numbers, (accumulator, element) => {
  return accumulator + element;
});

console.log(sum);

// Includes
function myIncludes(words, callback) {
  for (let i = 0; i < words.length; i++) {
    if (callback(words[i], i, words)) {
      return true;
    }
  }
  return false;
}

const check = myIncludes(strings, (element) => {
  return element === "exuberant";
});

console.log(check);

// IndexOf
function myIndexOf(words, callback) {
  for (let i = 0; i < words.length; i++) {
    if (callback(words[i], i, words)) {
      return i;
    }
  }
  return -1;
}

const index = myIndexOf(strings, (element) => {
  return element === "exuberant";
});

console.log(index);

// Push
function myPush(arr, callback) {
  arr[arr.length] = callback;
  return arr.length;
}
const element = 6;
const newLength = myPush(numbers, element);
console.log(numbers);

// LastIndexOf
function myLastIndexOf(words, callback) {
  for (let i = words.length - 1; i >= 0; i--) {
    if (callback(words[i], i, words)) {
      return i;
    }
  }
  return -1;
}

const lastIndex = myLastIndexOf(strings, (element) => {
  return element === "exuberant";
});

console.log(lastIndex);

// Keys
Object.grabKeys = function (obj) {
  const keys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  return keys;
};

const person = {
  name: "John",
  age: 30,
  gender: "male",
};

const keys = Object.grabKeys(person);
console.log(keys);

// Values
Object.grabValues = function (obj) {
  const values = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }

  return values;
};

const values = Object.grabValues(person);
console.log(values);

// Move Zeroes problem
function moveZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}

const nums = [0, 1, 0, 3, 12];
moveZeros(nums);
console.log(nums);

// Sum Range problem
function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

function total(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(total(range(1, 10)));

// Reverse Array problem

function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Array to List problem

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  while (list) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, n) {
  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}

// Deep Comparison problem

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    typeof a === "object" &&
    a !== null &&
    typeof b === "object" &&
    b !== null
  ) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }
  return false;
}
