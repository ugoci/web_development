var guestList = ["ugo", "sarah"];
    
function checkGuestList(guestName){
    //var guestList = ["ugo", "sarah"];
    var guestName = prompt("what is your name?")
    if (guestList.includes(guestName)){alert("welcome");}
    else{alert("sorry");}
}

checkGuestList();