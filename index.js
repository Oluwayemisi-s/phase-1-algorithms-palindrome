function isPalindrome(word) {
  // Write your algorithm here
    const checkPalindrome = word 
    let halfWord
    if (checkPalindrome.length === 0){
        console.log ('No word has been provided to check.')
        return false
    } else if (checkPalindrome.length === 1){
        console.log ('Provided word is an automatic palindrome since it has just one character.')
        return true
    } else if (checkPalindrome.length % 2 === 0){
        halfWord = checkPalindrome.length/2
        //return halfWord
    } else {
        halfWord = (checkPalindrome.length - 1)/2
        //return halfWord
    }

    //looping through characters
    for (let x = 0; x <= halfWord; x++){
      if (checkPalindrome[x] != checkPalindrome.slice(-1-x)[0]){
          console.log('The entered word is not a palindrome')
          return false
      }
    }
    console.log('The entered word is a palindrome')
    return true
}

//isPalindrome('robot')
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
