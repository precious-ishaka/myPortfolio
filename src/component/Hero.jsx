import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ThemeContext from "../context/ThemeContext";
import me from "../assets/face.jpeg";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8, rotate: -6 },
      { opacity: 1, scale: 1, rotate: 0, duration: 0.9 }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );
  }, []);

  return (
    <section className="w-full px-6 py-12 md:py-20 pt-28">
      <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center gap-8 lg:gap-16">
        {/* Text */}
        <div className="flex-1 mt-6 sm:mt-0">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0"
          >
            HI, I'm{" "}
            <span className="bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              ISHAKA PRECIOUS
            </span>
            , Software Developer{" "}
            
              Based In Nigeria.
          </h1>

          <p
            ref={paraRef}
            className={`mt-4 text-base sm:text-lg max-w-xl opacity-0 ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            I'm a Software developer from Lagos, Nigeria with a year of
            experience building reliable web applications focused on security
            and usability.
          </p>

          <div ref={buttonsRef} className="mt-6 flex flex-wrap gap-4 opacity-0">
            
             <a href="/ISHAKA_PRECIOUS_CV.docx"
              download
              className="px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition"
            >
              Download Resume
            </a>
            
              <a href="/#contact"
              className="px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div ref={imageRef} className="opacity-0">
          <img
            src={me}
            alt="Profile"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;