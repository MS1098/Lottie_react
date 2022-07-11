import React from "react";
import "./Ball.css";
import { gsap } from "gsap";




let dots = [],
  bg = document.querySelector("#featureBackground"),
  i, dot;

// create 80 dot elements and put them in an array
for (i = 0; i < 80; i++) {
  dot = document.createElement("div");
  dot.setAttribute("class", "dot");
  bg.appendChild(dot);
  dots.push(dot);
}

//set the initial position of all the dots, and pick a random color for each from an array of colors
gsap.set(dots, {
  backgroundColor: "random([#663399,#84d100,#cc9900,#0066cc,#993333])",
  scale: "random(0.4, 1)",
  x:400,
  y:300
});

// create the physics2D animation
let tween = gsap.to(dots, {
    duration: 2.5,
    physics2D: {
      velocity: "random(200, 650)",
      angle: "random(250, 290)",
      gravity: 500
    },
    delay: "random(0, 2.5)"
  });


GSDevTools.create({
  animation: tween,
  container: "#featureAnimation",
  minimal: true
});

export function Ball(){
    return(
        <div>
            <div class="feature" id="featureAnimation">
        <div id="featureBackground"></div>
      </div>

        </div>
    )
}