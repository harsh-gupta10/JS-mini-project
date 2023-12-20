let clk=document.querySelector('#clock')






clk.addEventListener('click',function(e)
{
  let cr=document.createElement('div')
  cr.id="time"
  cr.style.backgroundColor="orange"
  cr.style.color="white"
  cr.style.padding="20px"
  cr.style.margin="20px"
  cr.style.borderRadius="10px"
  cr.style.fontSize="33px"
  setInterval(function Conticlock(){
    let del=document.querySelector('#time')
    // console.log(del)
    if(del!=null)
    {
      del.remove()
    }
    let d=new Date()
  console.log(d.toLocaleTimeString())
  console.log(cr)
  if(cr!=null)
  {
    cr.innerHTML=d.toLocaleTimeString()
    let cen=document.querySelector('.center')
    cen.appendChild(cr)
  }

  },1000)
})

let pz=document.querySelector('#pause')
pz.addEventListener('click',function(e){
  setInterval(function removeClk()
  {
    let tm=document.querySelector('#time')
    if(tm!=null)
    {
      tm.remove()
      // removeEventListener()
    }
  },0.1)
})

// clk.addEventListener('click',function(e)
// {
//   let del=document.querySelector('#time')
//   console.log(del)
//   if(del!=null)
//   {
//     del.remove()
//   }
//   let d=new Date()
// console.log(d.toLocaleTimeString())
// let cr=document.createElement('div')
// cr.id="time"
// cr.innerHTML=d.toLocaleTimeString()
// cr.style.backgroundColor="orange"
// cr.style.color="white"
// cr.style.padding="20px"
// cr.style.margin="20px"
// cr.style.borderRadius="10px"
// cr.style.fontSize="33px"
// let cen=document.querySelector('.center')
// cen.appendChild(cr)
// })



