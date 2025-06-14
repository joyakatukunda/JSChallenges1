

function strCount(str, letter){
 let count = 0;

 for (let ch of str){
    if (ch=== letter){ count++;}

 }
return count;

}

console.log(strCount("Javascript is amazing", "a"));

  