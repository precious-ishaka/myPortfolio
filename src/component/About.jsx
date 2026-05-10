import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skillsImages from "../assets/assets.js";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Title slide in
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
      }
    );

    // Paragraphs
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: { trigger: textRef.current, start: "top 80%" },
      }
    );

    // Skill cards stagger
    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 30, scale: 0.85 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.07,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section className="max-w-6xl mx-auto my-20 px-6">
      <div ref={titleRef} className="text-center mb-16 relative opacity-0">
        <h1 className="text-5xl md:text-6xl font-semibold">About Me</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div ref={textRef} className="space-y-6 text-lg">
          <p>
            Full-Stack Developer with over a year of hands-on experience
            building modern, scalable web applications. I turn complex problems
            into clean, intuitive solutions that feel effortless to use.
          </p>
          <p>
            Aside writing code, I focus on performance, security, and user
            experience because a great product isn't just about functionality —
            it's reliable and safe for everyone who uses it.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsImages.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center gap-3 bg-white/5 p-4 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
              <p className="text-sm font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;