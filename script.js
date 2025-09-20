// gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



// animation on navigation

var nav = document.querySelector('.nav');
gsap.to('.nav',{
    y:-100,

    scrollTrigger:{
        trigger:'.nav',
        scroller:'.main',
        // markers:true,
        scrub:1,
        start:'60% 8%',
        end:'60% 10%',
    }
})

var navBar = document.querySelector('.navBar');
var menuBtn = document.querySelector('.nav i');
var closeButton = document.querySelector('.navBar .top h1')

menuBtn.addEventListener('click', () => {
  var tl = gsap.timeline();
 tl.to('.navBar',{
  height: '100%',
  duration:0.5,
 })
 tl.to('.navBar',{
 
    
  display:'block',
 })
 

})
closeButton.addEventListener('click', () => {

  gsap.to('.navBar',{
   height: '0%',
   duration:0.5,
  })

  gsap.to('.navBar',{
 
    
    display:'none',
   })
 
   
 })

 var tl = gsap.timeline();
 tl.from('.texts .txt h1',{
  y:100,
  stagger:0.2,

 })

 gsap.to('.texts .txt h1',{
  opacity:0.3,
  
  scrollTrigger:{
    scroller:'.main',
    trigger:'.texts.txt h1',
    scrub:2,
    start:'60% 50%',
    end:'60% 40%',
    // markers:true,
  }
 })

 // giving animation in page2
 gsap.from('.page2 video',{
  height : '0%',
  width : '0%',
  x:-300,
  rotate:120,
  opacity:0,
  scrollTrigger:{
    scroller:'.main',
    trigger:'.page2 video',
    scrub:2,
    start:'60% 80%',
    end:'60% 70%',
    // markers:true,
  }
 })
 

 // random card generator

 function generator(target) {
  var card = document.createElement('div');

  card.className = "disCard";
  var services = ["BRIDAL MAKEUP", "PARTY MAKEUP","HAIR CARE","FACIAL","SPA","French Nails","Massage","Full Face Wax","Full Face Threading","Nail Extension"]
 
 
 
  card.style.position = "absolute";
  var container = document.querySelector(target);
 
  container.addEventListener('click',(event) =>{
    card = document.createElement('div');
    card.className = "disCard";
    card.innerHTML = `${services[Number(Math.floor(Math.random() * 10))]}`
    card.style.position = "absolute";
    
   console.log(card)
   container.appendChild(card);
   
   
    card.style.left = event.clientX + "px";
    card.style.top = event.clientY + "px";
  

  });
  setInterval(() =>{
    var target = document.querySelectorAll('.disCard');
    target.forEach((element) => {
      element.remove();
    });
   
  },2000)

 }

 generator(".page3");


 //counter in page4

 function counter(targetNum, target,time){
  var count = 0;
  var interval = setInterval(() => {
    count++;
    target.innerHTML = count;
    if(count == targetNum){
      clearInterval(interval);
    }
  },time)

 }
 
 // calling counter function on scrolling 

gsap.to(".page4",{
  scrollTrigger:{
trigger:".page4",
scroller:".main",
start:"60% 80%",
end:"60% 70%",
// markers:true,

},
onStart:()=>{
  const num = [1000,30,8]
  const time = [0.2,10,100]
  var h1s = document.querySelectorAll(".circularCon h1");
  h1s.forEach((ele,index)=>{
    counter(num[index],ele,time[index])
  })
 
}
  }
)

// page5 animation

const divide = (target) => {
  var clutter = ``
 var arr = target.textContent.split('');
 for(var i = 0; i < arr.length; i++){
  clutter += `<span>${arr[i]}</span>`
 }
target.innerHTML = clutter;


}
divide(document.querySelector(".part1 h1"))

// using gsap for changing the font color of content

gsap.to(".part1 span",{
  color:"#83A714",
  fontWeight:"600",
  stagger:0.2,
  scrollTrigger:{
    trigger:".part1",
    scroller:".main",
    start:"60% 80%",
    end:"60% 50%",
    // markers:true,
    scrub:2,
  }
  
})
// page6 animaton service moving

gsap.to(".page6 .videoCon",{
  transform: "translateX(-400%)",
  // duration:1,
 
  scrollTrigger:{
    trigger:".page6",
    scroller:".main",
    start:"60% 60%",
    end:"60% 20%",
    // markers:true,
    pin:true,
    scrub:5,
  }

})

gsap.to('.page7 .circularDiv',{
  top:"48%",
scrollTrigger :{
  start:"60% 90%",
  end:"60% 85%",
  trigger:".page7",
  scroller:".main",
  // markers:true,
  scrub:4,
}
})

gsap.to('.page7 .circularDiv',{
  width:"90vh",
  height:"90vh",
 
  display:'none',
  transform:"translate(-50%,-50%)",
  // duration:1,
scrollTrigger :{
  start:"60% 65%",
  end:"60% 63%",
  trigger:".page7",
  scroller:".main",
  // markers:true,
  scrub:1,
}
})


gsap.to('.page7 .headers h1',{
  color:"#fff",
 
  // duration:1,
scrollTrigger :{
  start:"60% 65%",
  end:"60% 60%",
  trigger:".page7",
  scroller:".main",
  // markers:true,
  scrub:2,
}
})
gsap.to('.page7',{
  backgroundColor:"#000",
 
  // duration:1,
scrollTrigger :{
  start:"60% 65%",
  end:"60% 65%",
  trigger:".page7",
  scroller:".main",
  // markers:true,
  scrub:2,
}
})
//services
//step 1: get DOM
