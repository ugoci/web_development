var output = [];
var count = 1;

function fizzBuzz(){
    if (count % 3 === 0){
        output.push("Fizz");
    }else{
        output.push(count);
    }
    count++;
    
    console.log(output);
}