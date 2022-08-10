// N-th Power

function index(array, n){
    for(let i = 0;i < array.length; i++){
      if(i === n){
        return Math.pow(array[i],i)
      }
    }
    return -1
}