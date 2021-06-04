(function clickListen(){
    let currentActive = document.querySelector(".lasttday");
    let anotherone = document.querySelector(".alltime");
    document.querySelectorAll(".switchtime p").forEach(element=>{
        element.addEventListener('click',(cur)=>{
            currentActive.classList.toggle("activedate");
            anotherone.classList.toggle("activedate");
        })
    }
)})();