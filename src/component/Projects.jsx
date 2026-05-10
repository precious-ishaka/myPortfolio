import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../assets/assets.js";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    // Title entrance
    gsap.fromTo(
      titleRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
      }
    );

    // Cards stagger in
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 50, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div ref={titleRef} className="mb-16 space-y-3">
          <p className="text-sm font-semibold tracking-widest text-purple-400 uppercase opacity-0">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-0">
            Things I've{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Built
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-xl leading-relaxed opacity-0">
            A curated set of projects across frontend, backend, and mobile —
            built with modern tools and a focus on real-world usability.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }) {
  const cardRef = useRef(null);

  // Subtle tilt on mouse move
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    gsap.to(cardRef.current, {
      rotateX: y,
      rotateY: x,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 800,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        group relative flex flex-col rounded-2xl overflow-hidden
        border transition-colors duration-300 cursor-default
        ${featured
          ? "sm:col-span-2 lg:col-span-1 border-purple-500/40 bg-purple-500/5"
          : "border-white/8 bg-white/3 hover:border-purple-500/30"}
      `}
      style={{ willChange: "transform" }}
    >
      {/* Featured badge */}
      {featured && (
        <span className="absolute top-4 left-4 z-10 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
          ✦ Featured
        </span>
      )}

      {/* Image */}
      <div className="overflow-hidden aspect-video bg-zinc-800/50">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Name + number */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold leading-snug">{project.name}</h2>
          <span className="text-xs font-mono text-gray-600 mt-1 shrink-0">
            {String(project.id).padStart(2, "0")}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.Tech_Stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/8" />

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 transition-colors px-4 py-2 rounded-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/30 transition-all px-4 py-2 rounded-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}