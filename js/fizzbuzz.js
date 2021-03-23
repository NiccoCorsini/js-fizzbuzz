/*
1 Print an output from 1 to 100
2 For multiple number of 3 print Fizz
3 For multiple number of 5 print Buzz
4 For multiple number of 3 && 5 print FizzBuzz
*/

var numbers = [];

var Fizz = "Fizz";

var Buzz = "Buzz";

var nTimes = 100;

for (var i = 1; i <= 100; i++) {
    numbers.push(i);
    
    if (i % 3 === 0 && i % 5 === 0) {
        numbers[i - 1] = Fizz + Buzz;   
    }

    else if (i % 3 === 0) {
        numbers[i - 1] = Fizz;   
    }

    else if (i % 5 === 0) {
        numbers[i - 1] = Buzz;   
    }
    
}

console.table(numbers);