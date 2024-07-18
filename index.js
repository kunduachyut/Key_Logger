let buttonOne = document.getElementById("button_one");
let buttonTwo = document.getElementById("button_two");
let log = document.getElementById("log");
let state = document.getElementById("state");

buttonOne.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleup);
})

buttonTwo.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleup);
    log.textContent="";
    state.textContent=" ";
})

function handleDown(e){
    log.textContent=`key ${e.key} pressed down`; 
    state.textContent=`key is down`; 
}
function handleup(e){
    log.textContent= `key ${e.key} release`; 
    state.textContent=`key is up`; 
}