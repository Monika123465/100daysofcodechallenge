/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let arr=path.split("/")
    let stack=[]
    
    let item=""
    for(let i=0;i<arr.length;i++){
        item=arr[i]
        if(item===''||item===".") continue
        if(item===".."){
            stack.pop()
        }else{
            stack.push(item)
}
    }
      return '/'+stack.join('/')                          
    
};