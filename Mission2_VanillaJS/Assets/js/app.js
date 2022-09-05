const intro1 = document.getElementById('intro1');
const intro2 = document.getElementById('intro2');
const intro3 = document.getElementById('intro3');

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        fadeIn(intro1); 
    }, 0);
    setTimeout(() => {
      fadeIn(intro2); 
    }, 600);
    setTimeout(() => {
      fadeIn(intro3); 
    }, 1200);
})

function fadeIn(element, duration = 1000) {
    element.style.display = '';
    element.style.opacity = 0;
    let last = +new Date();
    let tick = function () {
      element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
      last = +new Date();
      if (+element.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
}

window.addEventListener('scroll', ()=>{
  let content = document.querySelector('#aboutImage');
  letContentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content.classList.add('active');
  } else {
    content.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content = document.querySelector('#aboutMe');
  letContentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content.classList.add('active');
  } else {
    content.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content = document.querySelector('#aboutDesc');
  letContentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content.classList.add('active');
  } else {
    content.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content = document.querySelector('#aboutContact');
  letContentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content.classList.add('active');
  } else {
    content.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content2 = document.querySelector('#educationTitle');
  letContentPosition = content2.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content2.classList.add('active');
  } else {
    content2.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content2 = document.querySelector('#education');
  letContentPosition = content2.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content2.classList.add('active');
  } else {
    content2.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content2 = document.querySelector('#education2');
  letContentPosition = content2.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content2.classList.add('active');
  } else {
    content2.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#experienceTitle');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#experience');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#experience_');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#experience2');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#experience2_');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#experience3');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#experience3_');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#awardTitle');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#awardImg');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#award3rd');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#award2021');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.2;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#awardImg2');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#awardRunner');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#award2019');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.2;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#awardImg3');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#awardOsn');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#awardOsn2');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.2;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#awardImg4');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#awardOsn3');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#awardOsn4');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.2;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactTitle');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});


window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactDesc');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactCall');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactCall2');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactCall3');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.2;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactForm');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactForm2');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});


window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactForm3');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactForm4');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactForm5');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactEmail');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactEmail2');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});

window.addEventListener('scroll', ()=>{
  let content3 = document.querySelector('#contactEmail3');
  letContentPosition = content3.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.2;
  if(letContentPosition < screenPosition){
    content3.classList.add('active');
  } else {
    content3.classList.remove('active');
  }
});