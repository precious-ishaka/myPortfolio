import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ishaka-precious",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "www.linkedin.com/in/precious-ishaka-1b0344409",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
 
  {
    label: "Email",
    href: "mailto:ishakaprecious734@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      topRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 90%" },
      }
    );

    gsap.fromTo(
      bottomRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 90%" },
      }
    );
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer ref={footerRef} className="w-full border-t border-white/8 mt-10 px-6 py-14">
      <div className="max-w-6xl mx-auto">

        {/* Top section */}
        <div ref={topRef} className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4 opacity-0">
            <p className="text-xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Ishaka Precious
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Software Developer From Lagos, Building Reliable and Secure Web Products.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-gray-500 hover:text-purple-400 transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

         

          {/* Availability */}
          <div className="opacity-0">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Status
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-green-400 font-medium">Available</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Open To Full-time Roles and Freelance Projects. Let's Build  Together.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 transition-colors px-4 py-2 rounded-xl"
            >
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 mb-6" />

        {/* Bottom bar */}
        <div ref={bottomRef} className="flex flex-col sm:flex-row items-center justify-between gap-4 opacity-0">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Ishaka Precious. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Designed & built by{" "}
            <span className="text-purple-400 font-medium">Ishaka Precious</span>
          </p>
       <p className="text-xs text-gray-600">
           Icons from 
            <a href="https://icons8.com/" target="blank" className="text-purple-400 font-medium"> Icon8.com</a>
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-purple-400 transition-colors duration-200 group"
          >
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}