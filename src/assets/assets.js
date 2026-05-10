
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

import mongodb from './icons8-mongodb-50.png'
import springboot from './icons8-spring-boot-50.svg'
import typescript from './icons8-typescript.svg'
import angular from './angular_png.png'
import elixir from './elixir_png.png'
import python from './python_png.png'


const skillsImages = [
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
  
]


const projects = [{id: 1,
   link: "https://github.com/precious-ishaka/AuthFlow", 
   name:"AuthFlow", 
   description:"The Purpose of this Web application is mainly for protecting routes in Angular using the Route Guard and Express.js as The backend for authenticating a user with Jwt token", Tech_Stack:["Angular", "Express.JS", "PostgreSQL"], image: authFlow},
{id: 2, link: "https://github.com/precious-ishaka/Books-API", name:"Books API", description:"", Tech_Stack:["Java", "PostgreSQL", "Spring Book"], image: authFlow},
{id: 3, link: "https://github.com/precious-ishaka/LinkUp", name:"LinkUp", description:"", Tech_Stack:["React Native"], image:linkUp},

]


export default skillsImages;
export { projects };