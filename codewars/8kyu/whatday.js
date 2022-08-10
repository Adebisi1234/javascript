// Return the day

function whatday(num) { 

    // put your code here
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if(num < 1 || num > 7){
      return 'Wrong, please enter a number between 1 and 7'
    }else{
      return days[num-1]
    }
}