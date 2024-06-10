Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
 Shery.makeMagnet(".magnet",);

 Shery.hoverWithMediaCircle(".hvr", {
    videos: ["0.mp4", "2.mp4","3.mp4"],
  });
//   Shery.imageMasker("#magnet" , {

//     mouseFollower: true,
//     text: "",
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });
  






  Shery.textAnimate(".hvr", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });



  Shery.imageEffect(".img", {
    style: 6,
    debug: true,
  });