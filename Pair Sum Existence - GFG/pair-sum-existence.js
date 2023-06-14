//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let sum = parseInt(readLine());
        let obj = new Solution();
        let res = obj.sumExists(arr, n, sum);
        console.log(res);
        
    }
}// } Driver Code Ends




// } Driver Code Ends


//User function Template for javascript



/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @returns {number}
*/

class Solution{
    sumExists(arr,n,sum){
        arr.sort((a,b)=>a-b)
      
      let start=0
      let end=n-1
      while(start<end){
          let summax=arr[start]+arr[end]
          if(summax==sum) return 1
          if(summax>sum){
              end--
          }else{
              start++
          }
      }
      return 0
     
        //code here
    }
}



