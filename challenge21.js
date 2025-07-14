
function fizzBuzz(string1, string2){
    let totalLength = string1.length + string2.length;
    if (totalLength % 3 === 0 && totalLength % 5 === 0) {
        return "FizzBuzz";
    }
    else if (totalLength % 3 === 0) {
        return "Fizz";
    }      
    else if (totalLength % 5 === 0) {
        return "Buzz";
    }
    else {return "Not divisible by 3 and 5";
    }

}
console.log(fizzBuzz("john", "jesse"))
console.log(fizzBuzz("Emmanuel", "Kisakye"))
console.log(fizzBuzz("javascript", "fun"))