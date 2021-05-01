//takes string and returns the max char

function maxChar(str){
  let strArr = str.replace(/\s/g, '').split("")
  let strHash = {}
  let maxNum = 0;
  let maxCharecter;

  for(let i = 0; i < strArr.length; i++){

      if(!strHash[strArr[i]]) {
        strHash[strArr[i]] = 1;
        
      } else {
        strHash[strArr[i]]++; 
      }
    
  }

  for(let i = 0; i< strArr.length; i++){
      
    if (maxNum < strHash[strArr[i]]){
      maxNum = strHash[strArr[i]]
      maxCharecter = strArr[i]
    }

  }
  
  console.log(maxCharecter + " : " + maxNum)

}

maxChar("")