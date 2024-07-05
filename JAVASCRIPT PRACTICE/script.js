const counterElm = document.getElementById("counter");
const increamentBtn = document.getElementById("increamentbtn");
const decreamentBtn = document.getElementById("decreamentbtn");
let count = 12;
const showcounter = ()=> {
  counterElm.innerText = count;
}
showcounter();
increamentBtn.addEventListener("click",()=>{
  count++;
  showcounter();
});
decreamentBtn.addEventListener("click",()=>{
  if(count>0){
    count++;
    showcounter();
  }
});
showcounter();



  


