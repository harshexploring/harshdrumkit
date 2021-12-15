var TB = document.querySelectorAll(".key").length;
console.log(TB);

//for click events..
for (var i = 0; i < TB; i++) {
    document.querySelectorAll(".key span ")[i].addEventListener("click", function (event) {
     

        var keyinnerhtml = this.innerHTML;
        animation( keyinnerhtml);
        makesound(keyinnerhtml);
        
    })
}

//FORkey press events
document.addEventListener("keypress", function (event) {
   
    animation(event.key);
    makesound(event.key);
    console.log(event);
    


})



function makesound(KEY) {

    switch (KEY) {

        case ("w"):
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case ("a"):
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case ("s"):
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case ("d"):
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case ("j"):
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case ("k"):
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case ("l"):
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }


}

function animation(keypressed){
    var activebutton=document.querySelector("."+keypressed);
    activebutton.classList.add("pressed");
   var H1=document.getElementsByTagName("h1")[0];
   H1.classList.add("glowh1");

  
    setTimeout(function(){
        activebutton.classList.remove("pressed");
       H1.classList.remove("glowh1");
    //    document.querySelector("body").style.backgroundColor="rgb(13, 165, 114)";
  
    },250);

    //
  

}





