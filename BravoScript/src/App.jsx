import React, { useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Choose from './Choose/Choose';
import Who from './Who/Who';
import Projects from './Projects/Projects';
import Feedback from './Feedback/Feedback';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Policy from './Policy/Policy';

function App() {
  useEffect(() => {
    function spark(event) {
      let i = document.createElement('i');
      i.style.left = `${event.pageX}px`;
      i.style.top = `${event.pageY}px`;
      i.style.setProperty('--x', getRandomTransitionValue());
      i.style.setProperty('--y', getRandomTransitionValue());

      document.body.appendChild(i);

      setTimeout(() => {
        document.body.removeChild(i);
      }, 2000);
    }

    function getRandomTransitionValue() {
      return `${Math.random() * 400 - 200}px`;
    }

    document.addEventListener('mousemove', spark);

    return () => {
      document.removeEventListener('mousemove', spark);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Choose />
      <Who />
      <Projects />
      <Feedback />
      <Team />
      <Contact />
      <Footer />
      <Policy />
      <style>
        {`
          i {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: red;
            pointer-events: none;
            animation: animate 2s linear forwards;
          }

          @keyframes animate {
            0% {
              opacity: 1;
              transform: translate(0, 0);
            }
            100% {
              opacity: 0;
              transform: translate(var(--x), var(--y));
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;


