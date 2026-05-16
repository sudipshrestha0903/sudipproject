const images = document.querySelectorAll(".slideshow img");

  gsap.set(images[0], { opacity: 1 });

  const tl = gsap.timeline({ repeat: -1 });

  images.forEach((img, i) => {
    tl.to(img, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    })
    .to(img, {
      opacity: 1,
      duration: 2   // stay visible
    })
    .to(img, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut"
    });
  });
  var options =document.querySelectorAll("#options");
var btn1 = document.querySelector('.danger-btn1');
var btn2 = document.querySelector('.danger-btn2');
var section = document.querySelectorAll('section');
var para =document.querySelector("#para")
btn1.addEventListener("click", function(){
 para.innerText = 'Voted for Balen shah';
 
})
btn2.addEventListener("click", function(){
 para.innerText = 'Voted for KP oli';
 
})


