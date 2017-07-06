/*
Run time:
 Let n be the number of characters in the input word
 Time: O(n) -> time it takes to walk through the input word
 Space: O(n) -> space given to the reverse function
*/

function reverseWord(word) {
  if (!word) {
    return "";
  }
  var splitS = word.split(" ");
  var reversedWord = [];
  for (var i = 0; i < splitS.length; i++) {
    reversedWord.unshift(splitS[i]);
  }
  return "'" + reversedWord.join(" ") + "'";
};
