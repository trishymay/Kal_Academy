// Given two sequences, print longest common subsequence
// LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3. LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.

function longestMatchingSubsequence (str1, str2, tail1, tail2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') return null;
  if (tail1 === undefined) tail1 = str1.length - 1;
  if (tail2 === undefined) tail2 = str2.length - 1;
  if (tail1 < 0 || tail2 < 0) return '';
  var result = '';

  while (tail1 >= 0 && tail2 >= 0 && str1[tail1] === str2[tail2]) {
    result = str1[tail1] + result;
    tail1--;
    tail2--;
  }
  var first = longestMatchingSubsequence(str1, str2, tail1 - 1, tail2);
  var second = longestMatchingSubsequence(str1, str2, tail1, tail2 - 1);

  if (first.length > second.length) result = first + result;
  else result = second + result;

  return result;
}