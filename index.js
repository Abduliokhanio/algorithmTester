class DSA {

  constructor(){}

  stringReversal(str1){
    let arrForward = str1.split("")
    let arrBackward = []
    for(let i = arrForward.length-1 ; i >=0 ; i-- ){
      arrBackward.push(arrForward[i])
    }
    let answer = arrBackward.join("")

    return answer
  }

  palindrome(str1){
    //split str1 into array
    let arrFor = str1.split("")
    let arrBac = []

    //reverse forloop and push into backwards array
    for(let i = arrFor.length-1; i >=0; i--){
      arrBac.push(arrFor[i])
    }

    //join backwards array
    let wordRev = arrBac.join("")

    //compare str1 with backwards array
    let result = (wordRev === str1)

    //return bool
    return result
  }


  intRev(int1){
    //convert int to abs num and string
    let absNum = Math.abs(int1).toString()

    //split into arrF
    let arrF = absNum.split("")
    let arrB = []

    //reverse arrF into arrB
    for(let i = arrF.length-1; i>=0 ;i--){
      arrB.push(arrF[i])
    }

    //join arrB & convert to num
    let revNum = parseInt(arrB.join(""))

    //add negative if needed
    let result 
    
    if (int1 < 0){
      result = revNum * -1
    }else{
      result = revNum
    }

    //return
   return result

  }

  maxChar(str1){

    //helper Vars
    let mc = ""
    let mn = 0

    //empty countHash
    let countHash = {}

    //itterate through the string and plug into countHash
    let splitStr1 = str1.split("")

    for(let i = 0; i < splitStr1.length; i++ ){
        if(!countHash[splitStr1[i]]){
            countHash[splitStr1[i]] = 1
        }else{
            countHash[splitStr1[i]]++
        }
    }

    //get keys from countHash
    let keys = Object.keys(countHash)

    //itterate through counthash using keys to find the maxChar
    for(let i = 0; i < keys.length; i++){
      if(countHash[keys[i]] > mn){
        mn = countHash[keys[i]]
        mc = keys[i]
      }
    }

    let ans = `MaxChar = ${mc} || MaxNumb = ${mn}`

    console.log(ans)

  }

  fizzBuzz(int1){
    // divisible by 3 = fizz
    // divisible by 5 = buzz
    // both fizzbuzz

    for(let i = 1 ; i <= int1 ;i++){
      if(i % 3 == 0 && i % 5 ==0){
        console.log("Fizzbuzz")
      }else if(i % 3 == 0){
        console.log("Fizz")
      }else if(i % 5 == 0){
        console.log("Buzz")
      }else{
        console.log(i)
      }

    }
  }

  arrayChunk(arr1,size){
   
    let chunked = []

   for(let i = 0; i < arr1.length; i++){
     let lastElement = chunked[chunked.length-1]

     if(!lastElement || lastElement.length === size){
       chunked.push([arr1[i]])
     }
     else{
       lastElement.push(arr1[i])
     }
   }
   return chunked

  }

  anagram(str1,str2){

    //clean the strings (no spaces / only chars)
    //split strings
    //bubble sort strings 
    //join strings
    // compare the results

    let clean1 = cleanWord(str1)
    let clean2 = cleanWord(str2)

    let countHash1 = countHashFunc(clean1)
    let countHash2 = countHashFunc(clean2)

    let result = comparehashed(countHash1,countHash2)

    console.log(result)

    function cleanWord(word){
      word = word.toLowerCase().replace(/[^\w]/g,'')
      return word
    }

    function countHashFunc(word){
      let wordArr = word.split("")
      let countHash = {}

      for(let i = 0; i < wordArr.length; i++){
        let element = wordArr[i]
     
        if(!countHash[element]){

          countHash[element] = 1
        }else{
          countHash[element]++
        }
      }

      return countHash
    }

    function comparehashed(hash1,hash2){
      let keys1 = Object.keys(hash1)
      let keys2 = Object.keys(hash2)

      if(keys1.length != keys2.length){
        return false
      }

      for(let i = 0; i < keys1.length; i++){
        let element = keys1[i]
        
        if(hash1[element] != hash2[element]){
          return false
        }
      }

      return true
    }

  }

  capitalization(str1){

    let wordsArr = str1.split(" ")
    let capArr = []

    for(let i = 0; i < wordsArr.length; i++ ){
      let capital = wordsArr[i][0].toUpperCase()
      let ol = wordsArr[i].slice(1)
      let newWord = capital + ol  
      capArr.push(newWord)
    }

    let capSentence = capArr.join(" ")

    return capSentence

  }

}

let a = new DSA()
//a.stringReversal("hello")
//a.palindrome("racecar")
//a.intRev(-123)
//a.maxChar("aaaaaabdul")
//a.fizzBuzz(15)
//a.arrayChunk([1,2,3,4,5,6,7,8,9,10],5)
//a.anagram("RAIL! SAFETY!",'fairy tales')
a.capitalization('a short sentence')
