document.querySelector(".menu__list--link").addEventListener('mouseover',()=>{
    document.querySelector(".menu__list--option").style.display = 'flex';
})

document.querySelector(".menu__list--link").addEventListener('mouseout',()=>{
    document.querySelector(".menu__list--option").style.display = 'none';
})

document.querySelector(".menu__list--option").addEventListener('mouseover',()=>{
    document.querySelector(".menu__list--option").style.display = 'flex';
})
document.querySelector(".menu__list--option").addEventListener('mouseout',()=>{
    document.querySelector(".menu__list--option").style.display = 'none';
})