(function(){
    let track = document.querySelector(".carousel__track");
    let children = Array.from(track.children);
    let prevButton = document.querySelector(".carousel__button--left");
    let nextButton = document.querySelector(".carousel__button--right");
    let nav =  document.querySelector(".carousel__nav");
    let dot = Array.from(nav.children);
    let current = 0;
    let zIndex = [3,2,1];
    for(let i=0;i<children.length;i++){
        children[i].style.zIndex = zIndex[i];
    }
    dot.map(x=>{
        x.addEventListener('click',(e)=>{
            reset(current);
            offTheIcon(current);
            current = e.target.getAttribute('data') - 1;
            glow(current);
            glowTheIcon(current);
        })
    })

    let reset = (current)=>{
        children[current].style.zIndex = zIndex[current];
    }
    let glow = (current)=>{
        children[current].style.zIndex = '1000';
    }

    let glowTheIcon = (current)=>{
        dot[current].style.backgroundColor = "black";
    }

    let offTheIcon = (current)=>{
        dot[current].style.backgroundColor = "grey";
    }

    let whatOnNext = ()=>{
        reset(current);
        offTheIcon(current);
        if(current === children.length - 1){
            current = -1;
        }
        current++;
        glow(current);
        glowTheIcon(current);
    }

    let whatOnPrev = ()=>{
        reset(current);
        offTheIcon(current);
        if(current === 0){
            current = children.length;
        }
        current--;
        glow(current);
        glowTheIcon(current);
    }

    nextButton.addEventListener('click',whatOnNext);
    prevButton.addEventListener('click',whatOnPrev);

    let startPos = 0;
    let endPos = 0;
    track.addEventListener('touchstart',(e)=>{
        startPos = e.touches[0].clientX;
    },false)

    track.addEventListener('touchend',(e)=>{
        if(endPos-startPos > 50){
            whatOnPrev(); 
        }
        if(endPos-startPos < -50){
            whatOnNext();
        }
        startPos = 0;
        endPos = 0;
    },false)

    track.addEventListener('touchmove',(e)=>{
        endPos = e.touches[0].clientX;
    })
})();