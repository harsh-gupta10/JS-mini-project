let buttons=document.querySelectorAll('.button')
let bd=document.querySelector('body')
// console.log(buttons)
// console.log(bd)
buttons.forEach(function(butt){
  // console.log(butt)
  butt.addEventListener('click',function(event){
    console.log(event)
    console.log(event.target)
    bd.style.backgroundColor=event.target.id
  });
  
});

