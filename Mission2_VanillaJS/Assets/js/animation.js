function animation({ duration, draw, timing }) {

    let begin = performance.now();
  
    reqAnimationFrame(function animation(time) {
      let timeFraction = (time - begin) / duration;

      if (timeFraction > 1){
        timeFraction = 1;
      }

      let progress = timing(timeFraction)
      draw(progress);
      
      if (timeFraction < 1) {
        reqAnimationFrame(animation);
      }
    });
}