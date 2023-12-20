let formCal=document.querySelector('form')
formCal.addEventListener('submit',function(e){
  e.preventDefault()
  let height=Number(document.querySelector('#height').value)
  console.log(height)
  height=height/100
  let weight=Number(document.querySelector('#weight').value)
  console.log(weight)
  let bmi=weight/(height**2)
  let res=document.querySelector('#results')
  res.innerHTML=bmi
  let resSen=document.querySelector('.ResSentence')
  if(bmi<18)
  {
    resSen.innerHTML= "You are UNDER weight"
  res.style.color="red"

  resSen.style.color="red"

  }
  else if(bmi<=32 && bmi >=18)
  {
    resSen.innerHTML= "You have PERFECT weight"
  res.style.color="green"

  resSen.style.color="green"

  }
  else
  {
    resSen.innerHTML= "You are OVER weight"
  res.style.color="red"

  resSen.style.color="red"

  }
})