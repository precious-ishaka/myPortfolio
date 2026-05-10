import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import facebook from "../assets/f-icon.png"
import email from "../assets/e-icon.png"
import x from "../assets/x-icon.png"
import linkIn from "../assets/link-icon.png"

// Replace these with your actual SVG imports:
// import facebook from "../assets/icons8-facebook.svg";
// import x from "../assets/icons8-x.svg";
// import linkedin from "../assets/icons8-linkedin.svg";
// import github from "../assets/icons8-github.svg";

const socialLinks = [
  { label: "Facebook", href: "", icon: facebook },
  { label: "X", href: "", icon: x },
   { label: "LinkedIN", href: "", icon: linkIn },
  { label: "email", href: "", icon: email }
 
];

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`w-full mt-10 py-8 px-6 border-t ${
        theme === "light" ? "border-gray-200" : "border-white/10"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
          © {new Date().getFullYear()} Ishaka Precious. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href || "#"}
              aria-label={social.label}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition hover:scale-110 ${
                theme === "light"
                  ? "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600"
                  : "bg-white/10 text-white hover:bg-purple-500/20 hover:text-purple-300"
              }`}
            >
             <img src={social.icon} alt="" srcset="" />
            </a>
          ))}
        </div>
      </div>

{/*       
        Once you have your SVG assets, replace the socialLinks array above with:
        <div className="flex items-center mt-3 gap-5">
          <a href=""><img src={facebook} className="size-10" /></a>
          <a href=""><img src={x} className="size-10" /></a>
          <a href=""><img src={linkedin} className="size-10" /></a>
          <a href=""><img src={github} className="size-10" /></a>
        </div> */}
     
    </footer>
  );
};

export default Footer;