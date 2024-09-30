
//alert("page is working");

$("h1").css("color", "red");

$(".first").css("color", "green");

$(".first")[0].addEventListener("click", handleClick);


function handleClick(){
    alert("clicked")
    
};


$("button").click(function(){
    $("button").css("color","blue")
    alert("New click")
}
)