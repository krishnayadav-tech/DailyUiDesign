// 🐱 🦁 🐯
(function(){
let price1 = 9.99;
let price2 = 15.99;
let price3 = 15.99;
let cards = document.querySelectorAll(".card");
cards.forEach((card,index)=>{
    card.addEventListener('click',(e)=>{
        cards.forEach((card)=>{
            card.classList.remove('scale');
            card.classList.add('opacity');
        })
        card.classList.remove('opacity');
        card.classList.add('scale');
        e.stopPropagation();
    })
})

document.querySelector(".togglebar1 .monthly").addEventListener('click',item=>{
    document.querySelector(".togglebar1 .monthly").classList.add("active");
    document.querySelector(".togglebar1 .yearly").classList.remove("active");
    document.querySelector(".price1").textContent = `£${price1}/month`;
    item.stopPropagation(true);
})
document.querySelector(".togglebar1 .yearly").addEventListener('click',item=>{
    document.querySelector(".togglebar1 .yearly").classList.add("active");
    document.querySelector(".togglebar1 .monthly").classList.remove("active");
    document.querySelector(".price1").textContent = `£${price1*12}/year`;
    item.stopPropagation(true);
})

document.querySelector(".togglebar2 .monthly").addEventListener('click',item=>{
    document.querySelector(".togglebar2 .monthly").classList.add("active");
    document.querySelector(".togglebar2 .yearly").classList.remove("active");
    document.querySelector(".price2").textContent = `£${price2}/month`;
    item.stopPropagation(true);
})
document.querySelector(".togglebar2 .yearly").addEventListener('click',item=>{
    document.querySelector(".togglebar2 .yearly").classList.add("active");
    document.querySelector(".togglebar2 .monthly").classList.remove("active");
    document.querySelector(".price2").textContent = `£${price2*12}/year`;
    item.stopPropagation(true);
})

document.querySelector(".togglebar3 .monthly").addEventListener('click',item=>{
    document.querySelector(".togglebar3 .monthly").classList.add("active");
    document.querySelector(".togglebar3 .yearly").classList.remove("active");
    document.querySelector(".price3").textContent = `£${price3}/month`;
    item.stopPropagation(true);
})
document.querySelector(".togglebar3 .yearly").addEventListener('click',item=>{
    document.querySelector(".togglebar3 .yearly").classList.add("active");
    document.querySelector(".togglebar3 .monthly").classList.remove("active");
    document.querySelector(".price3").textContent = `£${price3*12}/year`;
    item.stopPropagation(true);
})

document.querySelector("body").addEventListener('click',()=>{
    cards.forEach(x=>{
        x.classList.remove("scale")
        x.classList.remove('opacity');
    })
}
)
}());