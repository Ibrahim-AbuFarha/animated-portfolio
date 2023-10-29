import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18536470/pexels-photo-18536470/free-photo-of-full-moon-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos voluptatem veritatis sit facere ad, eum repellendus voluptate est voluptatum porro dolores atque tenetur modi, mollitia ipsam ab ullam. Odit.",
  },
  {
    id: 2,
    title: "Next.js Commerce",
    img: "https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos voluptatem veritatis sit facere ad, eum repellendus voluptate est voluptatum porro dolores atque tenetur modi, mollitia ipsam ab ullam. Odit.",
  },
  {
    id: 3,
    title: "vanilla js Commerce",
    img: "https://images.pexels.com/photos/18548494/pexels-photo-18548494/free-photo-of-skyscrapers-in-london.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos voluptatem veritatis sit facere ad, eum repellendus voluptate est voluptatum porro dolores atque tenetur modi, mollitia ipsam ab ullam. Odit.",
  },
  {
    id: 4,
    title: "music app Commerce",
    img: "https://images.pexels.com/photos/11544788/pexels-photo-11544788.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos voluptatem veritatis sit facere ad, eum repellendus voluptate est voluptatum porro dolores atque tenetur modi, mollitia ipsam ab ullam. Odit.",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div ref={ref} className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div style={{ y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  //transition
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Feature Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
