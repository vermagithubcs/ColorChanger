let body = document.querySelector("#container");
let purple = document.querySelector("#purple");
let blue = document.querySelector("#blue");
let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let teal = document.querySelector("#teal");
let cursor = document.querySelector("#cursor");
purple.addEventListener("click",()=>{
    body.style.backgroundColor = "purple";
})
purple.addEventListener('mousemove',(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        ease:"black.out",
        duration:0.6,
    })
    gsap.to(purple,{
        scale:1.2,
    })
});
purple.addEventListener("mouseleave",()=>{
    gsap.to(purple,{
        scale:1
    })
})
blue.addEventListener("click",()=>{
    body.style.backgroundColor = "blue";
})
blue.addEventListener('mousemove',(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        ease:"black.out",
        duration:0.6,
    })
    gsap.to(blue,{
        scale:1.2,
    })
});
blue.addEventListener("mouseleave",()=>{
    gsap.to(blue,{
        scale:1
    })
})
red.addEventListener("click",()=>{
    body.style.backgroundColor = "red";
})
red.addEventListener('mousemove',(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        ease:"black.out",
        duration:0.6,
    });
    gsap.to(red,{
        scale:1.2
    })
})
red.addEventListener("mouseleave",()=>{
    gsap.to(red,{
        scale:1
    })
})
yellow.addEventListener("click",()=>{
    body.style.backgroundColor = "yellow";
})
yellow.addEventListener('mousemove',(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        ease:"black.out",
        duration:0.6,
    });
    gsap.to(yellow,{
        scale:1.2
    })
})
yellow.addEventListener("mouseleave",()=>{
    gsap.to(yellow,{
        scale:1
    })
})
teal.addEventListener("click",()=>{
    body.style.backgroundColor = "teal";
})
teal.addEventListener('mousemove',(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        ease:"black.out",
        duration:0.6,
    });
    gsap.to(teal,{
        scale:1.2
    })
})
teal.addEventListener("mouseleave",()=>{
    gsap.to(teal,{
        scale:1
    })
})