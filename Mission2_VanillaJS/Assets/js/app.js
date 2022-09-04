window.addEventListener('scroll', ()=> {
    let content = document.querySelector("#about");
    let contentPositition = content.getBoundingClientRect().top;
    let screenPositition = window.innerHeight/5;
    if (contentPositition < screenPositition) {
        content.classList.add('active');
    } else {
        content.classList.remove('active');
    }
});

// const slidingTextBox = document.querySelector('.text-box');

// window.addEventListener('scroll', ()=> {
//     const {scrollTop, clientHeight} = document.documentElement;
//     const topElementToTopViewport = slidingTextBox.getBoundingClientRect().top;

//     console.log(topElementToTopViewport);

//     if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
//         slidingTextBox.classList.add('active')
//     }
// })

// var animateHTML = function() {
//     var elems,
//         windowHeight
    
//     var init = function() {
//       elems = document.getElementsByClassName("hidden");
//       windowHeight = window.innerHeight;
//       _addEventHandlers();
//     }
    
//     var _addEventHandlers = function() {
//         window.addEventListener("scroll", _checkPosition);
//         window.addEventListener("resize", init)
//     }
//     var _checkPosition = function() {
//       for ( var i = 0; i < elems.length; i++ ) {
//         var posFromTop = elems[i].getBoundingClientRect().top;
//         if ( posFromTop - windowHeight <= 0) { 
//           elems[i].className = elems[i].className.replace( "hidden", "fade-in" );
//         }
//       }    
//     }
    
//     return {
//       init: init
//     }
//   }
  
//   animateHTML().init();