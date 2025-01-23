import React from 'react'
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import './Who.css'
import text from '../assets/Text-4.png'

const Who = () => {

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className='cho-container'>
        <hr style={{ border: "1px solid black", margin: "20px 0" }} />

        <div className="who-contain">
          <div className="text">
            <img src={text} alt='' />
            <h1>We are a best IT solution provider in Sri Lanka</h1>
            <p>Since 2010 our company has been providing leading custom IT services to companies all over the world outsourced</p>
          </div>


          <div class="stats-container" ref={ref}>
            <div class="stat-box">
              <h1>{inView && <CountUp start={0} end={1} duration={2} />}+</h1>
              <h3>Years of Operation</h3>
              <p>With over a year of operation under our belt, we've honed our skills and refined our strategies, successfully elevating brands in the digital landscape and fostering their sustained growth.</p>
            </div>
            <div class="stat-box">
              <h1>{inView && <CountUp start={0} end={99} duration={2} />}%</h1>
              <h3>Positive Feedback</h3>
              <p>Boasting a remarkable 99% positive feedback score, our work consistently meets and exceeds client expectations, a testament to our commitment to excellence and client satisfaction.</p>
            </div>
            <div class="stat-box">
              <h1>{inView && <CountUp start={0} end={108} duration={2} />}</h1>
              <h3>Projects Completed</h3>
              <p>Having successfully completed 124 projects, our diverse portfolio showcases our versatility, our dedication, and our ability to deliver excellence across a multitude of industries and niches.</p>
            </div>
          </div>
        </div>

        
    </div>
  )
}

export default Who
