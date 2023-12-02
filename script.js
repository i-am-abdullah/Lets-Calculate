let btn = document.querySelectorAll(".btn")
let inp = document.querySelector("input")
let str = ""
Array.from(btn).forEach((bt)=>{
bt.addEventListener("click",(e)=>{
   if(e.target.innerHTML=="="){
    str=eval(str)
    str=eval(inp.value)
    inp.value = str
   }

   else if(e.target.innerHTML =="Clear"){
    str=""
    inp.value=str
   }
   else if(e.target.innerHTML =="DEL"){
    str=str.substring(0,str.length-1)
    inp.value=str
   }
    else{
    console.log(e.target)
    str+=e.target.innerHTML
    inp.value = str}
})
})