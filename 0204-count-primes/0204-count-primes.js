/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
 
    if(n<=2){
        return 0
    }
    let primes=[]
    let i=0
    let j=0
    let count=0
    
    for(i=2;i<n;i++){
        primes[i]=true
    }

    for(i=2;i<=Math.sqrt(n);i++){
        if(primes){
            for(j=i+i;j<n;j+=i)
                primes[j]=false
}
    }
    for(i=2;i<n;i++)
        if(primes[i])
            count++
    return count
};