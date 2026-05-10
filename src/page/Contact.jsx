import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ThemeContext from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="contact" className="w-full px-6 py-12 pt-28 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Get In{" "}
          <span className="bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className={`mb-8 text-lg ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
          Have a project in mind? Let's talk.
        </p>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-purple-500 transition ${
              theme === "light"
                ? "bg-white border-gray-200 text-gray-900"
                : "bg-white/5 border-white/10 text-white placeholder-gray-500"
            }`}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={`w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-purple-500 transition ${
              theme === "light"
                ? "bg-white border-gray-200 text-gray-900"
                : "bg-white/5 border-white/10 text-white placeholder-gray-500"
            }`}
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className={`w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-purple-500 transition resize-none ${
              theme === "light"
                ? "bg-white border-gray-200 text-gray-900"
                : "bg-white/5 border-white/10 text-white placeholder-gray-500"
            }`}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition self-start"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;