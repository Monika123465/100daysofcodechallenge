/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
      let res = [0]
  code(n, res, 0)
  return res
};

let code = function (n, res, num) {
  if (num >= n) return
  let len = res.length
  for (let i = len - 1; i >= 0; i--) {
    res.push(res[i] + len)
  }
  code(n, res, num + 1)
};