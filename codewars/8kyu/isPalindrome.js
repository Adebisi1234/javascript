// Palindrome Strings

function isPalindrome(line) {
    if(Number(line)){
      line = line.toString()
    }
    let str = line.split("").reverse().join("");
    if(line === str){
      return true
    }else{
      return false
    }
}