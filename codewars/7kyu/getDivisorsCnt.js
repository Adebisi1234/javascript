// Count the divisors of a number

function getDivisorsCnt(n){
    // todo
  let count = 0
  for(let i = 1; i <= n;i++){
    if(n%i === 0){
      count += 1
    }
  }
  return count
}
