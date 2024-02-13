let h =document.querySelector(".h");
let  m= document.querySelector(".m");
let  s = document.querySelector(".s")

function showTime() {
    const date = new Date();
    const h = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");
    const sec = date.getSeconds().toString().padStart(2, "0");
  
    const time = `${h}:${min}:${sec}`;
  
    document.getElementById("clock").innerHTML = time;
  
    setTimeout(showTime, 1000); // Update every second
  }
  
  showTime();