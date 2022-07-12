// import React from "react";
// import ReactDOM from "react-dom";
// import Matter from "matter-js";

// class Scene extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     var Engine = Matter.Engine,
//       Render = Matter.Render,
//       World = Matter.World,
//       Bodies = Matter.Bodies,
//       Mouse = Matter.Mouse,
//       MouseConstraint = Matter.MouseConstraint;

//     var engine = Engine.create({
//       // positionIterations: 20
//     });

//     var render = Render.create({
//       element: this.refs.scene,
//       engine: engine,
//       options: {
//         width: 600,
//         height: 600,
//         wireframes: false
//       }
//     });

//     var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
//     var ballB = Bodies.circle(110, 50, 30, { restitution: 0.5 });
//     World.add(engine.world, [
//       // walls
//       Bodies.rectangle(200, 0, 600, 50, { isStatic: true }),
//       Bodies.rectangle(200, 600, 600, 50, { isStatic: true }),
//       Bodies.rectangle(260, 300, 50, 600, { isStatic: true }),
//       Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
//     ]);

//     World.add(engine.world, [ballA, ballB]);

//     // add mouse control
//     var mouse = Mouse.create(render.canvas),
//       mouseConstraint = MouseConstraint.create(engine, {
//         mouse: mouse,
//         constraint: {
//           stiffness: 0.2,
//           render: {
//             visible: false
//           }
//         }
//       });

//     World.add(engine.world, mouseConstraint);

//     Matter.Events.on(mouseConstraint, "mousedown", function(event) {
//       World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
//     });

//     Engine.run(engine);

//     Render.run(render);
//   }

//   render() {
//     return <div ref="scene" />;
//   }
// }
// export default Scene;


import * as React from "react";
import { Engine, RenderClones, Walls, Circle } from "react-matter-js";

const Scene = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const circleCount = 50;
  const cirlceSize = height * 0.05;

  const renderCircles = () => {
    return [...Array(circleCount).keys()].map(num => (
      <Circle key={num} clone x={300} y={100} radius={cirlceSize} />
    ));
  };

  return (
    <>
      <Engine options={{}}>
        <RenderClones
          enableMouse
          options={{
            width,
            height,
            background: "transparent",
            wireframeBackground: "transparent",
            visible: false
          }}
        >
          <Walls x={0} y={0} width={width} height={height} wallWidth={1} />
          {renderCircles()}
        </RenderClones>
      </Engine>
    </>
  );
};

export default Scene;

