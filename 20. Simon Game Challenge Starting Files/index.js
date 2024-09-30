/*
assign sound to each box
make box sound when clicked 
create a random number generator between 1 and 4 included 
assign each number to a box
configure so that the random number selects a box each time
if the user selects the same box, continue, else, change screen to show end of game

*/

document.addEventListener("click", randomGenerator);

function randomGenerator(){
    var newRandomNum = Math.floor(Math.random() * 4 + 1);
    //return newRandomNum
    if(newRandomNum === 1){
            var greenAudio = new Audio("sounds/green.mp3");
            greenAudio.play();
        }if(newRandomNum === 2){
            var redAudio = new Audio("sounds/red.mp3");
            redAudio.play();
        };if(newRandomNum === 3){
            var yellowAudio = new Audio("sounds/yellow.mp3");
            yellowAudio.play();
        }if(newRandomNum === 4){
            var blueAudio = new Audio("sounds/blue.mp3");
            blueAudio.play();
        }else{ console.log("Wrong");
        //var wrongAudio = new Audio("sounds/wrong.mp3");
        //wrongAudio.play();
        }
    }


randomGenerator();

/*
if(newRandomNum = 1){
    $(".green").click(function(){
        var greenAudio = new Audio("sounds/green.mp3");
        greenAudio.play();
    })
}if(newRandomNum = 2){
    $(".red").click(function(){
        var redAudio = new Audio("sounds/red.mp3");
        redAudio.play();
    });
}if(newRandomNum = 3){
    $(".yellow").click(function(){
        var yellowAudio = new Audio("sounds/yellow.mp3");
        yellowAudio.play();
    });
}if(newRandomNum = 4){
    $(".blue").click(function(){
        var blueAudio = new Audio("sounds/blue.mp3");
        blueAudio.play();
    });
}else{
    var wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();
}

*/




/*
$(".green").click(function(){
    var greenAudio = new Audio("sounds/green.mp3")
    greenAudio.play()
});


$(".red").click(function(){
    var redAudio = new Audio("sounds/red.mp3")
    redAudio.play()
});

$(".yellow").click(function(){
    var yellowAudio = new Audio("sounds/yellow.mp3")
    yellowAudio.play()
});

$(".blue").click(function(){
    var blueAudio = new Audio("sounds/blue.mp3")
    blueAudio.play()
});

*/


/*
function randomGenerator(){
    var newRandomNum = Math.floor(Math.random() * 4 + 1);
    //return newRandomNum
    if(newRandomNum == 1){
        console.log("True");
    }else{console.log("False");}
}
*/