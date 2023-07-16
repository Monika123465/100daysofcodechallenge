/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
     let arr = []
    candidates.sort((a, b) => a - b)

    function combination(tempList, remaining, start) {
        for (let i = start; i < candidates.length && candidates[i] <= remaining; i++) {
            if (candidates[i] === remaining) {
                arr.push([...tempList, candidates[i]])
            } else {
                combination([...tempList, candidates[i]], remaining - candidates[i], i)
            }
        }
    }

    combination([], target, 0)
    return arr
    
};