
function revealToSpan() {
    document.querySelectorAll(".reveal")
  .forEach(function(elem){
    var parent = document.createElement("span");
    var child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");
    child.innerHTML= elem.innerHTML;
    parent.appendChild(child);
    elem.innerHTML = "";
    elem.appendChild(parent); 
  
  })
  }
  revealToSpan();
  function animateLoader(){
  var tl = gsap.timeline();
  tl
  .from(".child span",{
    x:80,
    delay:1,
    stagger:.2,
    duration:1.4,
    ease:Power3.easeInOut
  })
  .to(".parent .child",{
    y:"-100%",
    duration:1,
    delay:1,
    ease: Circ.easeInOut
  })
  .to("#loader",{
    height:0,
    duration:1,
    ease: Circ.easeInOut
  })
  .to("#green",{
    height:"100%",
    top:0,
    duration:0.5,
    delay:-1,
    ease: Circ.easeInOut
  })
  .to("#green",{
    height:"0%",
    top:0,
    duration:1,
    delay:-0.5,
    ease: Circ.easeInOut
  })
  }
  animateLoader();
  function homeHeader(){
    var typed = new Typed(".auto-type",{
      strings: ["Frontend Developer","Backend Developer","Coder"],
      typeSpeed:150,
      backSpeed:150,
      loop :true
    })
  }
  homeHeader();
    function scroll(){
      const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) => {
          console.log(entry)
          if(entry.isIntersecting) {
            entry.target.classList.add('show');}
          else{
            entry.target.classList.remove('show');
          }
        });
      });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    }
    scroll();
  var sidemenu = document.getElementById("sidemenu");
  function openmenu(){
      sidemenu.style.right = "0px";
  }
  function closemenu(){
      sidemenu.style.right = "-300px";
  }
  const scriptURL = 'https://script.google.com/macros/s/AKfycbybyvoDcTFpd55faGi3xjmEHuBUG0X289jkEH2ScZyrmkemVirr2Wm2DWPJqF96O54hTQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML="Message sent Successfully"
          setTimeout(function(){
              msg.innerHTML=""
          },4000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  const blob = document.getElementById('blob')
  document.body.onpointermove = event => {
    const{clientX,clientY} = event;
    blob.animate(
      {
        left:`${clientX}px`,
        top:`${clientY}px`
      },{duration:3000,fill:"forwards"}
    )
  }
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});
window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});
function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}
animateCircles();
function cardShow(){
  document.querySelectorAll(".cnt")
  .forEach(function(cnt){
    var showingCard;
    cnt.addEventListener("mousemove",function(dets){
      console.log(dets.target.dataset.index);
      document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
      showingCard= dets.target;
      document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
      showingCard.style.filter = "grayscale(1)";
    })
    cnt.addEventListener("mouseleave",function(dets){
      document.querySelector("#cursor").children[showingCard.dataset.index].style.opacity = 0;
      showingCard.style.filter = "grayscale(0)";
    })
  })
}
cardShow();