

let section1 = document.querySelector(".section1");
let section2 = document.querySelector("#page2");
let section3 = document.querySelector("#page3");
let section4 = document.querySelector("#page4");
gsap.to(section1,{
  background: ' linear-gradient(135deg, #0c1e25, #112d32, #1c3f46)',
  duration:40
})
gsap.to(section2,{
  background: ' linear-gradient(135deg, #0c1e25, #112d32, #1c3f46)',
  duration:30
})
gsap.to(section3,{
  background: ' linear-gradient(135deg, #0c1e25, #112d32, #1c3f46)',
  duration:30
})
gsap.to(section4,{
  background: ' linear-gradient(135deg, #0c1e25, #112d32, #1c3f46)',
  duration:30
})
let name = document.querySelectorAll("#name");

let list = document.querySelectorAll("#list a");
console.log(list);
let splits = new SplitText("#name", {
 
  type:"chars",
});

gsap.to(splits.chars, {

  y: 10,
  repeat: -1,
  yoyo: true,
  stagger: 0.05,
  rotateZ:25,
 delay:1
 
});
for(let i=0;i<4;i++){
    console.log(list[i]);
    gsap.from(list[i],{
    y: -75,
    stagger:0.5,
    duration:1
    
  })
    list[i].addEventListener('mouseover',function(){
        gsap.to(list[i],{
            
            duration: 0.3,
            
            color:'white',
           fontFamily: 'Acme',
          
          borderBottom: "5px solid  #00B6B6 ",
           border:"none",
          
            textAlign: "center"

        })
    })
  
}

for(let i=0;i<4;i++){
    console.log(list[i]);
    list[i].addEventListener('mouseleave',function(){
        gsap.to(list[i],{
             backgroundColor:"transparent",
            boxShadow:"none",
            duration: 0.3,
          
            y: 0,
          border:'none',
            fontFamily: 'Josefin Sans',
             color:'#e5e7eb',
            transition:"2s ease out",
             textAlign: "center"

        })
    })
}
let menu = document.querySelector("  i");
let toggle = true;
let lists = document.querySelector(" #list ");
menu.addEventListener("click", () => {

  
  if (toggle) {
    gsap.to(lists, { display: "flex" ,width: 150,border:'none' });
  } else {
    gsap.to(lists, { display: "none" ,duration:0.1});
  }

  toggle = !toggle; // flips true/false automatically
});



let center = document.querySelectorAll("#center-name p ");
console.log(center);
 let blur = new SplitText("#center-name", {
  type: "chars"
});
    
        gsap.from(blur.chars, {
  filter: "blur(30px)",
  opacity: 0,
  stagger: 0.04,
  duration:2,
  color:'blue ',
  fontWeight: 2000,
});

      
 let split = new SplitText("#para", {
  type: "chars"
});

gsap.to(split.chars, {
  y: -100,
  opacity: 1,
  stagger: 0.05,
  duration: 1,
  scale:1,
  color:"red"
});
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: "top 80%",
    end: "top 20%",
    markers: false,
    toggleActions: "restart none restart none"
  }
});
 let split1 = new SplitText("#services h1", {
  type: "chars"
});

tl.from(split1.chars, {
  y: -80,
  opacity: 0,
  stagger: 0.05,
  duration: 0.4,
  scale:1,
 
});
 let split2 = new SplitText("#services p", {
  type: "chars"
});

tl.from(split2.chars, {
  x: 80,
  opacity: 0,
  stagger: 0.05,
  duration: 0.4,
  scale:1,
 
    
  });
 

  let image = document.querySelector("#image");
  
  image.addEventListener("mouseenter",function(){
    gsap.to(image,{
      boxShadow:"0px 0px 80px red",
      scale:1.2,
      overflow:"hidden",
      rotateZ:25 ,
      duration:1,
      objectPosition:"cover",
      
      

    })
  })
   image.addEventListener("mouseleave",function(){
    gsap.to(image,{
      boxShadow:"0px 0px 10px orangered",
      scale:0.95,
      overflow:"hidden",
      rotateZ:0,
      duration:1,
      transition : "1s ease out"
      

    })
  })
   gsap.to(image,{
     boxShadow:"0px 0px 10px orangered",
      scale:0.95,
      overflow:"hidden",
      rotateZ:0,
      duration:1,
      transition : "1s ease out",
  
   })
     tl.from(image,{
     x:500,
     rotateY: 180,
     duration:1
     
   })
  

let button0= document.querySelectorAll(".b0");
console.log(button0);
let button1= document.querySelectorAll(".b1");
let button2= document.querySelectorAll(".b2");
 console.log(button1);
 console.log(button2); 
 gsap.utils.toArray(button0).forEach((btn, i) => {
  gsap.set(btn, {
    rotation: i % 2 === 0 ? -12 : 12
  });
}); 
gsap.utils.toArray(button0).forEach((btn, i) => {

  gsap.set(btn, {
    rotation: i % 2 === 0 ? -12 : 12
  });

  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { rotation: 0, scale: 1.2 });
  });
  

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { rotation: i % 2 === 0 ? -12 : 12, scale: 1 });
  });

});

gsap.utils.toArray(button1).forEach((btn, i) => {

  gsap.set(btn, {
    rotation: i % 2 === 0 ? -12 : 12
  });

  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { rotation: 0, scale: 1.2,
      
     });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { rotation: i % 2 === 0 ? -12 : 12, scale: 1 });
  });

});


gsap.utils.toArray(button2).forEach((btn, i) => {

  gsap.set(btn, {
    rotation: i % 2 === 0 ? -12 : 12
  });

  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { rotation: 0, scale: 1.5 });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { rotation: i % 2 === 0 ? -12 : 12, scale: 1 ,duration:1});
  });

});
  let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    start: "top 80%",
    end: "top 10%",
    markers: false,
    toggleActions: "restart none restart none"
  }
});

  let tl2= gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    start: "top 60%",
    end: "top 90%",
    markers: false,
    toggleActions: "restart none restart none"
  }
});
tl2.from("#page3 ,#grandparent , #parent ,#child",{
  opacity:0,
  filter : 'blur',
  duration:2,
  
  
})
let split4 = new SplitText("#grandParent h1", {
  type: "chars"
})
tl2.to(split4.chars, {
  duration:1,
  scale:1.5,
  textShadow:"0px 0px 10px #00B6B6",
  borderBottom:"4px solid #6D5397" ,
   rotate : '360deg',
})
tl2.from('.b0, .b1, .b2',{
  rotate : '180deg',
})

tl2.to("#page3 h2",{
  color: "pink",
  duration:0.5,
  transition: "ease",
  stagger:0.05,
  textShadow: "0px 0px 5px pink",
  scale:1,
})
let split3 = new SplitText("#skill h1,#page3 p", {
  type: "lines",
  type:"chars",
});

tl2.from(split3.lines, {
  y: -50,
  
  opacity: 0,
  stagger: 0.1,
  duration: 1.5,
  scale:1,
 
});
tl2.from(split3.chars, {
  x: -50,

  opacity: 0,
  stagger: 0.1,
  duration: 1,
  scale:1,
 
 
});

let information = document.querySelectorAll("#information #para");
console.log(information);
let split5 =  new SplitText('#para1,#para2',{
  type : 'chars'
})
gsap.from(split5.chars,{
y:100,
duration: 1,
stagger: 0.05,
opacity:0
 
   
})
let b00 = document.querySelector('#b00');
console.log(b00);
b00.addEventListener('click', function(){
  window.location.href = 'skill.html';
})
b01.addEventListener('click', function(){
  window.location.href = 'skill.html#page2';
});
b02.addEventListener('click', function(){
  window.location.href = 'skill.html#page3';
});





