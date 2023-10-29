import React, { useEffect, useState } from "react";
import "./cursor.scss";
import { motion } from "framer-motion";
export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mouseMove);
    //if we listen to any event we should clean up
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x + 10, y: position.y }}
    ></motion.div>
  );
};
