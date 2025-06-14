  

let str = "hello world"
let words = str.split(" ");           
let capitalizedWords = [];             
for (let i = 0; i < words.length; i++) {
  let word = words[i];                                 
  let capitalized = word.charAt(0).toUpperCase() + word.slice(1); 
  capitalizedWords.push(capitalized);                  
}

let result = capitalizedWords.join(" ");    
console.log(result); 






