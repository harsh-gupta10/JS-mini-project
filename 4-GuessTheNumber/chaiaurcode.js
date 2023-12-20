const no=Math.floor(Math.random() * (100 - 1 + 1)) + 1
console.log(no)
// let inpNo=Math.round(Number(document.querySelector('#guessField').value))
let sub=document.querySelector('#subt')
let guessRem=document.querySelector('#lastResult')
let prevGuess=document.querySelector('#Pguesses')
let MsgToFill=document.querySelector('#lowOrHi')


let NoGuesLeft=10;
let PrevGsArr=[]




function validateGuess(guess)
{

  if(isNaN(guess))
  {
    alert('Plz give a valid no')
  }
  if(guess<1)
  {
    alert('Plz give no greater than 1')
  }
  if(guess>100)
  {
    alert('Plz give a no Less than 100')
  }
  DisplayGuess(guess)
  if(NoGuesLeft==0)
  {
    DisplayMSg(`Game Over You Lost No was ${no}`)
    EndGAme()
  }
  else
  {
    NoGuesLeft--;
    // DisplayGuess(guess)
    MainAlgoOfGAme(guess)
  }
}

function MainAlgoOfGAme(guess)
{
  if(guess==no)
  {
    DisplayMSg('You got it right')
    EndGAme()
  }
  else if (guess < no)
  {
    DisplayMSg('Guessed no is Lower than Actual')
  }
  else if (guess > no)
  {
    DisplayMSg('Guessed no is Higher than Actual')
  }
  
}

function DisplayMSg(message)
{
  MsgToFill.innerHTML=`<h2>${message}</h2>`
}

function DisplayGuess(guess)
{
  PrevGsArr.push(guess)
  // prevGuess.innerHTML=PrevGsArr.toString();
  prevGuess.innerHTML+=`${guess} `
  guessRem.innerHTML=NoGuesLeft.toString()
}

function EndGAme()
{

}

function NewGAme()
{

}

if(NoGuesLeft>0)
{
  sub.addEventListener('click',function(e)
  {
    let inpNo=document.querySelector('#guessField')
    // console.log(inpNo)
    inpNo=Number(inpNo.value)
    console.log(inpNo)
    e.preventDefault()
    validateGuess(inpNo)

  })
}