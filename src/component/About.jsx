import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skillsImages from "../assets/assets.js";

gsap.registerPlugin(ScrollTrigger);

const interests = [
  {
    icon: "🧠",
    title: "Human Psychology",
    desc: "Fascinated by how people think, make decisions, and why they behave the way they do from cognitive biases to emotional intelligence.",
  },
  {
    icon: "📖",
    title: "Reading",
    desc: "I read across psychology, philosophy, and tech. Books help me think more clearly and approach problems from unexpected angles.",
  },
  {
    icon: "🎵",
    title: "Music",
    desc: "Music keeps me in flow state while coding. I'm drawn to anything with depth from afrobeats to lo-fi and classical.",
  },
  {
    icon: "🌍",
    title: "Problem Solving",
    desc: "I'm drawn to tricky problems  whether it's debugging system or thinking through how technology can create real-world impact.",
  },
];

const About = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);
  const interestsTitleRef = useRef(null);
  const interestsRef = useRef(null);

  useEffect(() => {
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

    // Interests title
    gsap.fromTo(
      interestsTitleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: interestsTitleRef.current, start: "top 85%" },
      }
    );

    // Interest cards
    gsap.fromTo(
      interestsRef.current.children,
      { opacity: 0, y: 40, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.1,
        ease: "back.out(1.3)",
        scrollTrigger: { trigger: interestsRef.current, start: "top 82%" },
      }
    );
  }, []);

  return (
    <section className="max-w-6xl mx-auto my-20 px-6" id="about">
      {/* Title */}
      <div ref={titleRef} className="text-center mb-16 relative opacity-0">
        <h1 className="text-5xl md:text-6xl font-semibold">About Me</h1>
      </div>

      {/* Bio + Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div ref={textRef} className="space-y-6 text-lg">
          <p>
            Software Developer With Over A Year Of Hands-on Experience
            Building Modern, Scalable Web Applications. I Turn Complex Problems
            Into Clean, Intuitive Solutions That Feel Effortless To Use.
          </p>
          <p>
            Aside Writing Code, I Focus On Performance, Security, And User
            Experience, Because A Good Product Isn't Just About Functionality
            It's Reliable And Safe For Everyone Who Uses It.
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

      {/* Interests */}
      <div className="mt-24">
        <div ref={interestsTitleRef} className="mb-10 opacity-0">
          <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-2">
            Beyond the code
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            What I'm Into
          </h2>
        </div>

        <div
          ref={interestsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {interests.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 opacity-0"
            >
              <span className="text-3xl">{icon}</span>
              <div>
                <h3 className="text-base font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;