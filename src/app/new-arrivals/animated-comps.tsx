"use client";

import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

export const Example = () => {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const firstBoxRef = useRef<HTMLDivElement>(null);
  const secondBoxRef = useRef<HTMLDivElement>(null);

  const { x, y } = useSpring({
    x: show ? coords.x : 0,
    y: show ? coords.y : 0,
    config: { tension: 250, friction: 30 },
  });

  const handleFirstBoxClick = () => {
    const obj = firstBoxRef.current
      ? firstBoxRef.current
      : document.createElement("div");
    const { left, top, width, height } = obj.getBoundingClientRect();
    setCoords({ x: left + width / 2, y: top + height / 2 });
    setShow(true);
  };

  return (
    <div>
      <div
        ref={firstBoxRef}
        onClick={handleFirstBoxClick}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      />
      <animated.div
        ref={secondBoxRef}
        style={{
          position: "absolute",
          top: y,
          left: x,
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
        }}
      />
    </div>
  );
};
