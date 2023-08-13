
var hitrn = 0;
var score = 0;
var selectedBubble;
var rn;

function bubbleMaker(){
    
    var clutter = ""; 
    
    for(var i = 1; i < 169; i++ ){
        rn = Math.floor(Math.random()*10)

      clutter += `<div id="bubble">${rn}</div>`
     
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
    
    var timer = 60;

    var timeVal = setInterval(() => {

        document.querySelector("#time").textContent = timer;
        if(timer > 0){
            timer--;
        }
        else{
            clearInterval(timeVal)
            document.querySelector("#pbottom").innerHTML = `
               <h1>Game Over</h1>
               <br  >
               <h3>Your Score: ${score} </h3>`

        }
    }, 1000)
}

function hitMaker() {
     
     hitrn = Math.floor(Math.random()*10)
     document.querySelector("#hitVal").textContent = hitrn;

}

function increaseScore(){
     
    score += 10; 
    document.querySelector("#scoreVal").textContent = score;
     

}


document.querySelector("#pbottom")
.addEventListener("click", function(details){
  selectedBubble = Number(details.target.textContent);
  
  if(selectedBubble === hitrn){
    increaseScore();
     hitMaker();
     bubbleMaker();
  }

});



bubbleMaker();
runTimer();
hitMaker();
eventBubble()









