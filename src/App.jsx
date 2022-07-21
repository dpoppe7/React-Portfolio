import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './indicators.css'

var scrollTop = 0;
const windowHeight = window.innerHeight;
const sections = document.querySelectorAll('section');
const navigation = document.querySelector('.navigation');
function resetSelection() {
  for (var i = 0; i < navigation.children.length; i++) {
    navigation.children[i].classList.remove('selected');
  }
}
window.addEventListener('scroll', function() {
  scrollTop = window.scrollY;
  sections.forEach(function(section, i) {
    if (section.offsetTop <  scrollTop + windowHeight/2 && scrollTop < section.offsetTop + windowHeight/2) {
      resetSelection();
      navigation.children[i].classList.add('selected');
    }
  });
});

navigation.querySelectorAll('li').forEach(function(item, i) {
  item.addEventListener('click', function() {
    resetSelection();
    window.scrollTo({
      top: i * windowHeight,
      behavior: 'smooth'
    });
  });
});


const App = () => {
  return (
    <>
    <ul class="navigation">
      {/* Number of children must be PAIR */}
      <li class="selected"></li>
      <li></li>
      <li></li>
      <li></li>  
      <li></li>  
      <li></li>  
    </ul>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App