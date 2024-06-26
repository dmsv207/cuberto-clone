Shery.mouseFollower();
Shery.makeMagnet(".magnet");

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: "#featured-content",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});


var sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top 10%",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});








Shery.hoverWithMediaCircle(".main-c", {
  videos: ["0.mp4","2.mp4", "3.mp4"],
});
