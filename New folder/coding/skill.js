

let flex = document.querySelectorAll(".flexbox-animate div");
console.log(flex);
let flex1 = document.querySelector("#flex7");
let flex2 = document.querySelector("#flex8");
let flex3= document.querySelector("#flex9");
let flex4= document.querySelector("#flex10");
let flex5 = document.querySelector("#flex11");
let flex6 = document.querySelector("#flex12");
let tl= gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    start: "top top",
    end: "top 100%",
    markers: true,
    toggleActions: "restart none restart none",
    duration:1
  }
});
tl.to('#flex7',{
    y:180,
      duration:1,
    yoyo:true,
     rotate : 180,

  
})
tl.to('#flex8',{
    y:180,
    borderRadius : 5,
    duration:1,
    yoyo:true,
    rotate : 180,

})
tl.to('#flex9',{
    y:180,
      duration:1,
    yoyo:true,
     rotate : 180,


})
tl.to('#flex10',{
    y:-170,
      duration:1,
    yoyo:true,
     rotate : 180,

})
tl.to('#flex11',{
    y:-170,
    borderRadius:50,
      duration:1,
    yoyo:true,
     rotate : 180,
   
})
tl.to('#flex12',{
    y:-170,
     rotate : 180,
  
})
flex.forEach(elementc => {
    elementc.addEventListener('click',  () => {
        gsap.to(elementc,{
            scale:1.2
        })
    })
      elementc.addEventListener('dblclick',  () => {
        gsap.to(elementc,{
            scale:1
        })
    })
});
let html = document.querySelector("#html");
let structure = document.querySelector("#structure");
gsap.from(html, {
 y:-500,
  duration:1,
  

})
gsap.from(structure, {
 y:500,
  duration:1,

})
  let toggle = true;
html.addEventListener("mouseenter", ()=>{

  if(toggle===true){
      gsap.to(html,{
    scale:1.1,
    y:-20
  });
  toggle = false;
  }else{
    gsap.to(html,{
      scale: 1,
      y:0
    });
    toggle = true;
  }

} )


