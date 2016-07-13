// Given two string str1 and str2, find the shortest string that has both str1 and str2 as subsequences.
// Examples:
// Input: str1 = “geek”, str2=”eke”
// Output: “geeke”

function shortestSubsequence(str1, str2, tail1, tail2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') return null;
  if (tail1 === undefined) tail1 = str1.length - 1;
  if (tail2 === undefined) tail2 = str2.length - 1;
  var result = '';
  while (str1[tail1] === str2[tail2] && tail1 >= 0 && tail2 >= 0) {
    result = str1[tail1] + result;
    tail1--;
    tail2--;
  }
  if (tail1 < 0 && tail2 < 0) return result;
  if (tail1 < 0) return str2.slice(0, tail2 + 1) + result;
  if (tail2 < 0) return str1.slice(0, tail1 + 1) + result;

  var first = shortestSubsequence(str1, str2, tail1 - 1, tail2) + str1[tail1] + result;
  var second = shortestSubsequence(str1, str2, tail1, tail2 - 1) + str2[tail2] + result;

  if (first.length < second.length) return first;
  return second;
}