// function locomotive() {
//   gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("main"),
//     smooth: true,
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);

//   // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy("main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector("main").style.transform
//       ? "transform"
//       : "fixed",
//   });

//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();
// }

// locomotive();

function mouseeffect() {
  var page1 = document.querySelector("#page1");
  var mouse = document.querySelector(".mouse");

  page1.addEventListener("mousemove", function (e) {
    //   mouse.style.left = e.x + "px";
    //   mouse.style.top = e.y + "px";
    gsap.to(mouse, {
      x: e.x,
      y: e.y,
    });
  });

  page1.addEventListener("mouseenter", () => {
    gsap.to(mouse, {
      scale: 1,
      opacity: 1,
    });
  });
  page1.addEventListener("mouseleave", () => {
    gsap.to(mouse, {
      scale: 0,
      opacity: 1,
    });
  });
}
mouseeffect();

function section2Animation() {
  gsap.from(".para p", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scroolTrigger: {
      trigger: ".section2",
      scroller: "main",
      start: "top 40%",
      end: "top 37%",

      scrub: 2,
    },
  });
}

section2Animation();

var tl = gsap.timeline();

tl.from(".loader h3", {
  x: 40,
  opacity: 0,
  stagger: 0.1,
});

tl.to(".loader h3", {
  opacity: 0,
  x: -40,
  duration: 1,
  stagger: 0.1,
});

tl.to(".loader", {
  opacity: 0,
});

tl.to(".loader", {
  display: "none",
});

tl.from("content h1", {
  y: 100,
  opacity: 0,
});
