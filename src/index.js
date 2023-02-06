import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App/>, document.querySelector("#root"));

const themeToggler = document.querySelector("#theme-toggler")

//change theme
themeToggler.addEventListener('click', () => {
   document.body.classList.toggle('light-theme');

   themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
   themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

})

//Gradient effect(by Uzo Awili)
//  const gradient = document.querySelector(".gradient");

//  function onMouseMove(event) {
//    gradient.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(0, 181, 191, 0.08) 0, #0a192f7e 50%)';
//  }
//  document.addEventListener("mousemove", onMouseMove);