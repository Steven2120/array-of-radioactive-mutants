/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(arr) {
  arr.push("Colin");
}

function addMeToStart(arr) {
  arr.unshift("Colin");
}

function changeLast(arr, value) {
  arr.pop();
  arr.push(value);
}

function changeAllValuesTo(arr, value) {
  //loop through array and changes the value of iteration of the array to the value of value
  for (let i = 0; i < arr.length; i++) {
    arr[i] = value;
  }
}

function oddOrEven(arr) {
  //loops through array and if number is even, arr[i] changes its value from the current number to either odd or even depending on the number
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = "even";
    } else {
      arr[i] = "odd";
    }
  }
}

function changeNextThreeToValue(start1, arr1, value1) {
  //defines variable to have value of the index where start1 is located in the array
  let place = arr1.indexOf(start1);
  
  //loops through array and if start1 starts at index 0, the loop will stop 3 indices prior to end. if it doesn't then loop will stop 2 indices prior to end. Also the loop will start one index after where start1 is.
  for (let i = place + 1; i < arr1.length - 1; i++) {
    if (place === 0) {
      for (let i = place + 1; i < arr1.length - 2; i++) {
        arr1[i] = value1;
      }
    } else {
      arr1[i] = value1;
    }
  }
}




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
