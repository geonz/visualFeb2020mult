 
var maxFact = 10; 
var minFact = 1; 
// the number you want to practice to... 

var factNum;;// the starting number to be multiplied by; the 'answer'
  // 
  // the order in which the facts will be presented. 0, 1 and ten are "rule based" and should be done before we do this.
var factSequence=[ 10, 2, 5,4,9,3,6,7,8];
// the initial setting - arrays begin with "0"
var factIndex=0;
// sets the factSet to the right number.   It will change as we go. 
var factSet=factSequence[factIndex];

var imgsrc = "image should be here"; 


// this changes the times tables fact set to the next in the sequence

function setToHigh5()
{  minFact = 6;
   maxFact=10;
   first5.disabled=true;
   sixThru10.disabled=true;
   all10.disabled=true;
   startUp();
}
function setToFirst5()
{  minFact = 1;
   maxFact=5;
   first5.disabled=true;
   sixThru10.disabled=true;
   all10.disabled=true;
   startUp();
}
function setToAll10()
{  minFact = 1;
   maxFact=10;
   first5.disabled=true;
   sixThru10.disabled=true;
   all10.disabled=true;
   startUp();
}

function nextFact()
{
    factIndex++;  
    factSet=factSequence[factIndex];
    p1.innerHTML="next fact is" + factSet;
    startUp();
}

// this displays the first fact in whatever set you are on; so if you want to start the fact you're on over, it will do that. Also works at beginning. 
function startUp()
{
   // start with our number x 1 or 6. 
   directions.innerHTML="What multiplication fact is in the picture?";
  factNum=minFact;
    // reset the buttons 
    check1.disabled=false;
  reset.disabled=false;
  startFact.disabled=false;
  // present the problem and call up its picture. 
  newFact();
}

function startOver()
{
  // make sure we're starting with the twos. 
  first5.disabled=false;
  sixThru10.disabled=false;
  all10.disabled=false;
  startUp();
}


function newFact()
// first make sure we're only going to ten. 
{
  if (factNum>maxFact)
  {
  p1.innerHTML= "you're done!" +'<button id="check1" class="button1" onclick="nextFact();">Next Fact</button>';
  } 
// maybe that should be in "check answer" or in both. 
else 
  {
        // p1.innerHTML="fact number  is: " + factNum;  
        // now type the question in for this fact, with the input box.
      factor2.innerHTML= factSet + " x " + '<input type="number" id="factor" size="1" maxlength="2"/>' + " = " + '<input type="number" id="multAnswer1" size = "1" maxlength="3"/> ';
     
    }
// here's where we create the number chart and then shade in the multiples of the fact. 
createMultImage();
}


function pickImage(factSet)
{
  switch(factSet)
  {
    case 2:
     {imgsrc='<img src= images/icon2.png   alt="2 red dots domino " style="min-height:50px;  max-width:100%;max-height:100%;">';
     break;}

  
  case 3:
  {
    imgsrc='<img src= images/icon3.png   alt="3 red dots domino" style="min-height:50px;max-width:100%;max-height:100%;">';
    break;
  }

  case 4:
     {imgsrc='<img src= images/icon4.png   alt="4 red dots domino " style="min-height:50px;max-width:100%;max-height:100%;">';
     break;}

     case 5:
     {imgsrc='<img src= images/icon5.png   alt="5 red dots domino " style="min-height:50px;max-width:100%;max-height:100%;">';
     break;}
     case 6:
     {imgsrc='<img src= images/icon6.png   alt="6 red dots domino " style="min-height:50px;max-width:100%;max-height:100%;">';
     break;}

     case 7:
     {imgsrc='<img src= images/icon7.png   alt="7 red dots domino " style="min-height:50px;max-width:100%;max-height:100%;">';
     break;}

     case 8:
     {imgsrc='<img src= images/icon8.png   alt="8 red dots domino " style="min-height:50px;max-width:100%;max-height:100%;">';
     break;}

     case 9:
     {imgsrc='<img src= images/icon9.png   alt="9 red dots domino " style="min-height:50px;max-width:100%;max-height:100%;">';
     break;}

  case 10:
  {
    imgsrc='<img src= images/icon10.png alt="10 dots like a domino" style="min-height:50px;  max-width:100%;max-height:100%; ">';
    break;
  }
}
}


function createMultImage()
{
  let multPicHTML="";
pickImage(factSet); 
if (factNum <=maxFact)

  {for (let num=1; num<=factNum; num++)
 
    {multPicHTML +='<div>'+ imgsrc + '</div>';
      // now make it the HTML
    multPic.innerHTML=multPicHTML;
    }
  }
}
function checkName(picNum)
{
var b = factor.value;
if (b==="")
  {
    feedback.innerHTML="please enter an answer";
  }
else if (b==factNum)
  {
    
    // document.getElementById("A1").style.display = 'block';
    // document.getElementById("check2").style.display = 'inline';
    checkAnswer();
    
  }
else
    {
      feedback.innerHTML="Check your entry; it doesn't seem to be right. I'm just a computer, though..."
    }
  
}


function checkAnswer()
{
    var c = multAnswer1.value; 
  if (c==="")
  {
    feedback.innerHTML="please enter an answer";
  }
else 
  if (c == factNum*factSet)
  {
          // if (factNum>=10)
          // {
          //   "That's right! You're done with this set of facts. "
          
          // }
  // else    
  //  // need a "next fact" or 
  //   {
       factNum+=4;
    feedback.innerHTML="That's right - try the next one!  factnum is now " + factNum;
newFact();
    // go to the next one.   
  }
  else{
    feedback.innerHTML="That doesn't seem to be right.";
    // do better than this -- make it actually diagnostic. 
  }
 
} 

  