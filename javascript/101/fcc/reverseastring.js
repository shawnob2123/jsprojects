// Goal is to reverse a string

function reverseString(str) {

  let splitString = str.split(''); // pass an empty string for each character
  let reversedArray = splitString.reverse(); //reverse array characters
  let reversedString = reversedArray.join('') // reversed array is joining the empty string to from an array

  return reversedString;
}

reverseString("hello");
