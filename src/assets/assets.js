
import css from './css.png'
import html from './html.png'
import javascript from './javascript.png'
import nodejs from './Nodejs.png'
import reactjs from './icons8-react-100.png'
import tailwind from './icons8-tailwind-css.svg'
import postgresql from './icons8-postgresql-50.svg'
import java from './java.png'
import express from './icons8-express-js-50.svg'
import linkUp from "./linkUp.jpeg"
import authFlow from "./authFlow.png"
import books from "./books.jpg"
import mongodb from './icons8-mongodb-50.png'
import springboot from './icons8-spring-boot-50.svg'
import typescript from './icons8-typescript.svg'
import angular from './angular_png.png'
import elixir from './elixir_png.png'
import python from './python_png.png'
import excel from "./icons8-excel-50.svg"
import git from "./icons8-git-50.svg"


const skillsImages = [
        {id: 0, image: excel, name: "Excel"},
       {id: 1, image: html, name: "HTML"},
    {id: 2, image: css, name: "CSS"},
     {id:3, image: python, name: "Python"},
     {id: 4, image: tailwind, name: "Tailwind CSS"},
    {id: 5, image: javascript, name: "JavaScript"},
     {id: 6, image: elixir, name: "Elixir"},
     {id: 7, image: java, name: "Java"},
      {id: 8, image: typescript, name: "TypeScript"},
    {id: 9, image: reactjs, name: "React Native"},
    {id: 10, image: angular, name: "Angular"},
     {id: 11, image: springboot, name: "Spring Boot"},
    {id: 12, image: nodejs, name: "Node.js"},
    {id: 13, image: express, name: "Express.js"},
    {id: 14, image: mongodb, name: "MongoDB"},
     {id: 15, image: postgresql, name: "PostgreSQL"},
       {id: 16, image: git, name: "Git"},
]


const projects = [{id: 1,
   link: "https://github.com/precious-ishaka/AuthFlow", 
   name:"AuthFlow", 
   description:"The Purpose of this Web application is mainly for protecting routes in Angular using the Route Guard and Express.js as The backend for authenticating a user with JWT", Tech_Stack:["Angular", "Express.JS", "PostgreSQL"], image: authFlow},
{id: 2, link: "https://github.com/precious-ishaka/Books-API", 
   name:"Books API", description:"Created An endpoint that is role-based that only Admins are allowed to Post, Update and Delete while Users are only allowed to Get a specific book from the data base including JWT for Authentication",
    Tech_Stack:[ "Spring Boot",  "PostgreSQL"], image: books},
{id: 3, link: "https://github.com/precious-ishaka/LinkUp", name:"LinkUp", description:"New To mobile Development So I Created A UI Of A Chat Application With Different Routes, Just Frontend Specifically", Tech_Stack:["React Native"], image:linkUp},

]


export default skillsImages;
export { projects };