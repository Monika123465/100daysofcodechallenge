/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
 
let words=[]
let str=""

for(let i=0;i<s.length;i++){
    let char=s[i]
    
    if(char==" " && str){
        words.push(str)
        str=""
    }else if(char!==" "){
        str+=char
}

}
    str && words.push(str)
    return words.reverse().join(" ")
};
