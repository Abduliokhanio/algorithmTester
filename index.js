function twoArrayPal(arrcomb){

// 1) itterate through the combinations of the array that make combinations using 2 elements 

// 2) Need to reverse the combination to see if that match the inputed array used to first create the combo before reversal

// 3) Compare

// 4) If true increment the counter by 1 and add the combo into another array

//5) return the array with uniqe values and the total count.

  let count = 0; 

  let palCollector = []
  let uniqPal = []

  for(let i = 0 ; i < arrcomb.length; i++){
    for(let j = 0; j < arrcomb.length; j++){

      if(arrcomb[i] != arrcomb[j]){
        let fusedArr = arrcomb[i].concat(arrcomb[j])
        let twoArrWord = fusedArr.join("");
        let revArr = [];
              
        for(let k = fusedArr.length-1; k >=0 ; k-- ){
          revArr.push(fusedArr[k])
        }
        let revword = revArr.join("");

        if(twoArrWord === revword){
          palCollector.push(arrcomb[i])
          palCollector.push(arrcomb[j])
          count++
        }
      }
    }
  }

  for(let i = 0; i < palCollector.length; i++){
    if(!uniqPal.includes(palCollector[i])){
      uniqPal.push(palCollector[i])
    }
  }
  console.log(count)
  console.log(uniqPal)
}

// var longestPalindrome = function(s) {
//     var str = '';
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < 2; j++) {
//             var left = i;
//             var right = left + j;
//             while (s[left] && s[left] === s[right]) {
//                 left--;
//                 right++;
//             }
//             if (right - left - 1 > str.length) {
//                 str = s.slice(left + 1, right);
//             }
//         }
//     }
//     return str;
// };

function longestPalindrome(str){
  let string = ''
  let left = 0
  let right = 0

  spl = str.split("")
  
  splhalflength = spl.length/2

  for(let i = 0; i < splhalflength; i++){
    console.log(spl[right])

    right++
  }
  
}


let arrArr = [[1,2],[2,1],[5,6],[8,9],[10,11]]


longestPalindrome("12345678")