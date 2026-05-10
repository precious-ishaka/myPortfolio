import React, { useEffect, useRef, useState, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThemeContext from "../context/ThemeContext";
import github from "../assets/icons8-github.png";
import link from "../assets/link-icon.png";
import email from "../assets/e-icon.png";
import location from "../assets/location.png";


gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "sending" | "sent" | "error"

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    )
      .fromTo(
        infoRef.current.children,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: 0.15, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        formRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );
  }, []);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Replace with your actual form endpoint (e.g. Formspree, EmailJS, etc.)
    // Simulating a network request here:
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
  };

  const inputBase = `w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 focus:ring-2 focus:ring-purple-500 ${
    theme === "light"
      ? "bg-white border-gray-200 text-gray-800 placeholder-gray-400"
      : "bg-white/5 border-white/10 text-white placeholder-gray-500"
  }`;

  return (
    <section id="contact" ref={sectionRef} className="max-w-6xl mx-auto my-24 px-6">
      {/* Title */}
      <div ref={titleRef} className="text-center mb-16 opacity-0">
        <h2 className="text-5xl md:text-6xl font-semibold">Contact Me</h2>
        <p
          className={`mt-4 text-lg max-w-xl mx-auto ${
            theme === "light" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div ref={infoRef} className="space-y-8">
          {[
            {
              icon: email,
              label: "Email",
              value: "ishakaprecious734@gmail.com",
              href: "mailto:ishakaprecious734@gmail.com"
            },
            {
              icon: link,
              label: "LinkedIn",
             value: "precious-ishaka",
              href: "www.linkedin.com/in/precious-ishaka-1b0344409",
            },
            {
              icon: github,
              label: "GitHub",
              
              href: "https://github.com/ishaka-precious",
            },
            {
              icon: location,
              label: "Location",
              value: "Lagos, Nigeria",
              href: null,
            },
          ].map(({ icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4 opacity-0">
              <span ><img src={icon} className="w-15 h-15 mt-0.5"/></span>
              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-widest ${
                    theme === "light" ? "text-purple-600" : "text-purple-400"
                  }`}
                >
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-base hover:text-purple-500 transition-colors ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    {value}
                  </a>
                ) : (
                  <p
                    className={`text-base ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    {value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div className="opacity-0">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputBase}
            />
          </div>

          <div className="opacity-0">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputBase}
            />
          </div>

          <div className="opacity-0">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className={`${inputBase} resize-none`}
            />
          </div>

          <div className="opacity-0">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="mt-3 text-center text-green-500 font-medium">
                ✅ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-center text-red-500 font-medium">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;