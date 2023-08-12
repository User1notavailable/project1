// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
  

     var timeout;

function firstPageAnim(){

    var tl = gsap.timeline();
     
    tl.from("#nav", {
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5

    });

    tl.to(".boundingelem", {
        y: 0,
        opacity: 0.8,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -0.5,
        stagger: 0.1 

    }); 
    
    tl.from("#herofooter", {
        y: 0,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1,
        // stagger: 0.2 



    }); 











    // to({

    // })




}

function mouseCircleClamper(){

    var x = 1;
    var y = 1;

    var xprev = 0;
    var yprev = 0;

  window.addEventListener("mousemove", function(dets){
    clearTimeout(timeout)
    //  xdiff = dets.clientX - xprev;
    //  ydiff = dets.clientX - yprev;
   
     xscale = gsap.utils.clamp(0.75, 1.15, dets.clientX - xprev);
     yscale = gsap.utils.clamp(0.75, 1.15, dets.clientX - yprev);

     xprev = dets.clientX;
     yprev = dets.clientY;



     mouseCursorFollower(xscale, yscale);


     timeout = setTimeout(() => {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`; 

    }, 100);    




});

}
mouseCircleClamper();


function mouseCursorFollower(xscale, yscale){
     window.addEventListener("mousemove", function(dets) {
    
     // console.log(dets.clientX, dets.clientY)
     document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`; 
     });

    
}
     mouseCursorFollower();
     firstPageAnim();


     document.querySelectorAll(".elem").forEach(function (elem) {
         var rotate = 0;
         var diffRotate = 0;

         elem.addEventListener("mouseleave", function(dets) { 
            gsap.to(elem.querySelector("img"), {
              
                opacity: 0,
                ease: Power3,
                duration: 0.5

    
            });
    
    
         });
    

        elem.addEventListener("mousemove", function(dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
         diffRotate = dets.clientX - rotate;
         rotate = dets.clientX;

         var picRotate = gsap.utils.clamp(-25,25, diffRotate);
         
        gsap.to(elem.querySelector("img"), {

            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: picRotate
        })  

        


        })
    })
