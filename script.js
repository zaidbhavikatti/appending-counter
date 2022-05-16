// h2
// 3buttons
// appending
// functionality

let rootEl=document.getElementById("root");

let countEl=document.createElement("h2");
countEl.innerText=0;
rootEl.appendChild(countEl);

let increbutton=document.createElement("button");
increbutton.innerHTML="Increment";
increbutton.setAttribute("onclick","increment()");
rootEl.appendChild(increbutton);

function increment(){
    let currentValue=countEl.textContent;
    let updatedValue=parseInt(currentValue)+1;
    countEl.textContent=updatedValue
}

let decbutton=document.createElement("button");
decbutton.innerHTML="Decrement";
decbutton.setAttribute("onclick","decrement()");
rootEl.appendChild(decbutton);

function decrement(){
    let currentValue=countEl.textContent;
    let updatedValue=currentValue>0?parseInt(currentValue)-1:0;
    countEl.textContent=updatedValue;
}

let resetbutton=document.createElement("button");
resetbutton.innerHTML="Reset";
resetbutton.setAttribute("onclick","reset()")
rootEl.appendChild(resetbutton);

function reset(){
    rootEl.textContent=0;
}