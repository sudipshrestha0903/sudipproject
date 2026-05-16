let cursor = document.querySelector("#cursor");

window.addEventListener("mousemove", function (dets){
    console.log(dets);
    gsap.to(cursor, {
        x:  dets.x,
        y: dets.y,
        duration:0.1
      
    })

})
var tl = gsap.timeline();
tl.from("nav h1,nav h2, nav button,#center2", {
    y:-50,
    duration:1,
    opacity:0,
    delay:1,
    stagger:0.2
})
tl.from("#center1 h3", {
    y:-30,
    opacity:0,
    duration:1,
})

tl.from("#center1 button", {
    x:-30,
    opacity:0,
    duration:1,
})
tl.from("#section2 img",{
     y:30,
    opacity:0,
    duration:1,
    stagger:0.5
})


let container4 = document.querySelector("#container4");
let container3 = document.querySelector("#container3");
let container2 = document.querySelector("#container2");
let container1= document.querySelector("#container1");



container4.addEventListener("mouseenter",function(){
    gsap.to("#container4", {
        y:-10,
        scale:1.2,
        boxShadow: "-20px 10px 5px 0.5px",
        
    })
    })

container4.addEventListener("mouseleave",function(){
gsap.to("#container4",{
        y:10,
        scale:0.7,
        boxShadow: "10px 10px 30px black"
})
})
container3.addEventListener("mouseenter",function(){
    gsap.to("#container3", {
        y:-10,
        scale:1.2,
        boxShadow: "-20px 10px 5px 0.5px"
    })
    })

container3.addEventListener("mouseleave",function(){
gsap.to("#container3",{
        y:10,
        scale:0.7,
        boxShadow: "10px 10px 30px black"
})
})
container2.addEventListener("mouseenter",function(){
    gsap.to("#container2", {
        
        y:-10,
        scale:1.2,
        boxShadow: "-20px 10px 5px 0.5px"
    })
    })

container2.addEventListener("mouseleave",function(){
gsap.to("#container2",{
        y:10,
        scale:0.7,
        boxShadow: "10px 10px 30px black"
})
})
container1.addEventListener("mouseenter",function(){
    gsap.to("#container1", {
        y:-10,
        scale:1.2,
        boxShadow: "-20px 10px 5px 0.5px"
    })
    })

container1.addEventListener("mouseleave",function(){
gsap.to("#container1",{
        y:10,
        scale:0.7,
        boxShadow: "10px 10px 30px black"
})
})
let topBtn = document.querySelector("#req");
topBtn.addEventListener("mouseenter", function(){
  gsap.to("#req", {
    y:10,
    scale:0.8,
        boxShadow: "10px 10px 30px black"
  })
})
topBtn.addEventListener("mouseleave", function(){
  gsap.to("#req", {
    y:0,
    scale:1,
        boxShadow: "0 10px 25px #FB972D",
        duration:0.2
    })
})
let brands = document.querySelectorAll("#section2 img");
brands.forEach(img => {
     img.addEventListener("mouseenter",function(){
        
        gsap.to(brands,{
            y:-30,
            x:10,
            stagger:0.3,
        })
     });
     img.addEventListener("mouseleave",function(){
        
        gsap.to(brands,{
            y:0,
            stagger:0.3,
        })
     });
    
});
let btn1 = document.querySelector("#book");
btn1.addEventListener("mouseenter", function(){
  gsap.to("#book", {
    y:10,
    scale:0.8,
        boxShadow: "10px 10px 30px black"
  })
})
btn1.addEventListener("mouseleave", function(){
  gsap.to("#book", {
    y:0,
    scale:1,
        boxShadow: "0 10px 25px #FB972D",
        duration:0.2
    })
})
// split elements with the class "split" into words and characters
let split = SplitText.create("#para", {
     type: "lines" 
    });

// now animate the characters in a staggered fashion
gsap.from(split.lines, 
    {
  duration: 1.3,
  delay:5, 
  y: 100,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05,
  
   // 0.05 seconds between each
});
let split1= SplitText.create("#para1", {
    type: "lines"
});
gsap.from(split1.lines, {
    
      duration: 1,

   
  y: 20,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.5,
  scrollTrigger: ST("#para")
})
function ST(target, extra = {}) {
  return {
    trigger: target,
    scroller: "body",
    start: "top 20%",
    end: "top 0%",
    toggleActions: "play reverse play reverse",
    markers:true
   
  };
}

let play = document.querySelectorAll("#end h1 ");
const marquee = gsap.to("#end h1", {
  xPercent: -100,
  duration: 10,
  ease: "none",
  repeat: -1
});
window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to(" #end h1 ", {
    transform: "translateX(-200%)",
    duration :4,
    repeat:-1

    
     
}) 
    } 
  else{
      gsap.to(" #end h1 ", {
    transform: "translateX(0%)",
    ease:"none",
    duration :4,
    repeat:-1
  
  
    
}) 
  }
}
)




