// Calculate average


function find_average(array) {
    // your code here
    let total = array.length
    let sum = 0
    if(array.length > 0){
      for(let i = 0; i < array.length; i++){
        sum += array[i]
        total = array.length
      }
      let average = sum/total
      return average
    }else{
      return 0
    }
}