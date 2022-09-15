// variables
let boxes = new TimelineMax();
let box = document.querySelectorAll(".box");
let hover = false;

function loadin() {
  // change unresolved attribute to resolved,
  document.body.removeAttribute("unresolved");

  //   and fade in from nothing
  TweenMax.from("#content", 2, {
    opacity: 0,
  });
}

//if content is loaded,
if (
  document.readyState === "interactive" ||
  document.readyState === "complete"
) {
  // run function resolve
  resolve();
} else {
  window.addEventListener("DOMContentLoaded", loadin);
}

//hovered over animation
boxes.staggerFrom(
  box,
  0.95,
  { transformOrigin: "50% 50%", opacity: 0, scale: 0.85, ease: Power2.easeOut },
  0.02
);

//when moused over
box.forEach(function (element, i) {
  element.addEventListener(
    "mouseover",
    //   grow box by 1.1x from center
    function () {
      if (!hover) {
        TweenMax.to(element, 1, { transformOrigin: "50% 50%", scale: 1.1 });
      }
      hover = true;
    }
  );

  //when mouse leaves
  element.addEventListener(
    "mouseleave",
    //set hover to false and revert back to scale 1 from center
    function () {
      hover = false;
      TweenMax.to(element, 1, { transformOrigin: "50% 50%", scale: 1 });
    }
  );

  //when mouse is clicked
  element.addEventListener("click", function () {
    //fade content to 0 opacity
    TweenMax.to("#content", 2, {
      opacity: 0,
    });
  });
});
