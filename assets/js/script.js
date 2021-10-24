var timeEl = document.getElementById('countdown');
var printTimeEl = document.getElementById('time');
var startQuizBtn = document.getElementById('start');
var answerBtn = document.querySelectorAll('.answer');
var answerBtn2 = document.querySelectorAll('.answer2');
var answerBtn3 = document.querySelectorAll('.answer3');
var answerBtn4 = document.querySelectorAll('.answer4');
var answerBtn5 = document.querySelectorAll('.answer5');
var scoreEl = document.getElementById('final-score');
var showScoreEl = document.getElementById('show-score');
var userInitial = document.getElementById('initial');
var submitBtn = document.getElementById('submit-inital');
var veiwHighScore = document.getElementById('score');

var time = 0;
var score = 0;
        
//ending the quiz 
function endQuiz(){
    document.getElementById("qa-box1").style.display ="none";
    document.getElementById("qa-box2").style.display ="none";
    document.getElementById("qa-box3").style.display ="none";
    document.getElementById("qa-box4").style.display ="none";
    document.getElementById("qa-box5").style.display ="none";
    document.getElementById("firstpage").style.display = "none";
    scoreEl.textContent = score;
    document.getElementById("final").style.display = "block";
}
// timer that count down from 75
function countdown() {
    var timeLeft = 75;

    var timeInerval = setInterval(function(){
        if (timeLeft >1){
            printTimeEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            printTimeEl.textContent = '';
            clearInterval(timeInerval);
            endQuiz();
        }
    },1000);
    
}

// Start the quiz and the timer 
function startQuiz(){
    document.getElementById("firstpage").style.display = "none";
}
startQuizBtn.addEventListener("click",function(){
    startQuiz();
    countdown();
    firstQuestion();
});

// display the first question 
function firstQuestion(){
    document.getElementById("qa-box1").style.display ="block";
}

//display the second question
function secondQuestion(){
    document.getElementById("qa-box1").style.display ="none";
    document.getElementById("qa-box2").style.display ="block";
}

// checking the answer for question 1
answerBtn.forEach(item =>{
    item.addEventListener("click",function(){
        if (item.textContent== "3.Alerts"){
            score+=10; 
        }
        else {

            printTimeEl.textContent=printTimeEl.textContent-10  
        }
        secondQuestion() ;  
    });    
});

  //display the 3rd question
  function thirdQuestion(){
    document.getElementById("qa-box2").style.display ="none";
    document.getElementById("qa-box3").style.display ="block";
 
}
// checking the answer for question 2
answerBtn2.forEach(item =>{
    item.addEventListener("click",function(){
        
        if (item.textContent== "3.parenthesis"){
            score+=10;    
        }
        else{

            printTimeEl.textContent=printTimeEl.textContent-10
             
        } 
        thirdQuestion() ;    
    });  
});

//display the 4th question
function fourthQuestion(){
    document.getElementById("qa-box3").style.display ="none";
    document.getElementById("qa-box4").style.display ="block";
}
// checking the answer for question 3
answerBtn3.forEach(item =>{
    item.addEventListener("click",function(){
        //document.querySelector(".correct").style.display="none";
        //document.querySelector(".wrong").style.display="none";
        if (item.textContent== "4.all of the above"){
            score+=10;   
        }
        else{
            printTimeEl.textContent=printTimeEl.textContent-10;
            
        }
        fourthQuestion() ;  
    });
    
});
//display the 5th question
function fifththQuestion(){
    document.getElementById("qa-box4").style.display ="none";
    document.getElementById("qa-box5").style.display ="block";
}
// checking the answer for question 4
answerBtn4.forEach(item =>{
    item.addEventListener("click",function(){
        
        if (item.textContent== "3.quoutes"){
            score+=10;   
        }
        else{
            printTimeEl.textContent=printTimeEl.textContent-10;
             
        }
        fifththQuestion() ;  
    });
    
});

// score
function displayScore(){
    document.getElementById("qa-box5").style.display ="none";
    document.getElementById("final").style.display ="block"

}
// checking the answer for question 5
answerBtn5.forEach(item =>{
    item.addEventListener("click",function(){
        //document.querySelector(".correct").style.display="none";
        //document.querySelector(".wrong").style.display="none";
        if (item.textContent== "4.console.log"){
            score+=10; 
        }
        else{
            printTimeEl.textContent=printTimeEl.textContent-10;    
        }
        displayScore();
        scoreEl.textContent = score;
    });
    
});

// setting the initial and score in to the local storage

function higScore(){

var user = {
    initial: userInitial.value.trim(),
    userScore: scoreEl.textContent = score
};
// filling the local storage
localStorage.setItem("user", JSON.stringify(user));

document.getElementById("final").style.display = "none";
//creating the html elments to show the initial and the score
var highScor = document.createElement("h3");                 
highScor.innerHTML = "High score"; 
highScor.setAttribute("style","margin-left:500px;");               
document.body.appendChild(highScor); 

var displyHighScore =document.createElement("p");                 
displyHighScore.innerHTML = "1." + user.initial + user.userScore; 
displyHighScore.setAttribute("style", "border:solid; border-color:gray; padding :5px; width:200px;margin-left:500px;") ;            
document.body.appendChild(displyHighScore); 

var goBackBtn = document.createElement("BUTTON"); 
goBackBtn.innerHTML = "Go back";                   
document.body.appendChild(goBackBtn);  

var clearBtn = document.createElement("BUTTON"); 
goBackBtn.setAttribute("style","background-color:blueviolet; width:100px; padding:5px; border-radius: 5px;  display: inline;color:white;margin-left:500px;");  
clearBtn.innerHTML = "Clear high scores";                   
document.body.appendChild(clearBtn);  
clearBtn.setAttribute("style","background-color:blueviolet; width:200px; padding:5px; border-radius: 5px; display: inline; color:white;margin-left:500px;"); 
// the go back btn
goBackBtn.addEventListener("click",function(){
    document.getElementById("firstpage").style.display = "block";
       
});
clearBtn.addEventListener("click",function(){
      score=0; 
}) ;    

}
// the submit btn 
submitBtn.addEventListener("click",function(){
    higScore();
});

//the link for the score
veiwHighScore.addEventListener("click",function(){
    showScoreEl.textContent= score;
   document.getElementById("show-score")=localStorage.getItem("user",JSON.stringify(user));
});

