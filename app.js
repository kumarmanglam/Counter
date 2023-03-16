const dec = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const inc = document.querySelector("#increase")
const counter = document.querySelector(".counter")



dec.addEventListener("click", function(){
  let cnt = counter.textContent;
  cnt--;
  counter.textContent=cnt;
  if(cnt > 0) {
    counter.style.color = "green";
  }
  if (cnt < 0){
    counter.style.color = "red";
  }
  if (cnt === 0) {
    counter.style.color = "#222"
  }
})

inc.addEventListener("click", function(){
  let cnt = counter.textContent;
  cnt++;
  counter.textContent=cnt;
  if(cnt > 0) {
    counter.style.color = "green";
  }
  if (cnt < 0){
    counter.style.color = "red";
  }
  if (cnt === 0) {
    counter.style.color = "#222"
  }
})

reset.addEventListener("click", function(){
  counter.textContent=0;
  counter.style.color = "#222"
})