function loveCalculator(){
    var name1 = prompt("What is your name?");
    var name2 = prompt("What is your name?");
    var lovePercentage = Math.random();
    var lovePercentage = lovePercentage * 100;
    var lovePercentage = Math.floor(lovePercentage);
    
    if (lovePercentage < 50){
        console.log(lovePercentage, "Low love score");
    }else {
        console.log("High love score");
    }
        
}

loveCalculator();