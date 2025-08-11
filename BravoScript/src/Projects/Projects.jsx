import React from 'react'
import './Projects.css'
import text from '../assets/Text-5.png'
import Pro1 from '../assets/Pro-1.jpg'
import Pro2 from '../assets/Pro-2.png'
import Pro3 from '../assets/Pro-3.jpeg'
import Pro4 from '../assets/Pro-4.png'
import Pro5 from '../assets/Pro-5.jpg'

const Projects = () => {
    return (
        <div className='Pro-container'>
            <hr style={{ border: "1px solid black", margin: "20px 0" }} />
            <div className="Pro-contain">
                <div className="text">
                    <img src={text} alt='' />
                    <h1>Our Projects</h1>
                </div>

                <div className="Pro-cards">
                    <div className="Pro-one-clo">
                        <div className="Pro-one-row">
                            <div class="Pro-one-clom cardp-container">
                                <div class="cardp">
                                    <div class="front-content">
                                        <img src={Pro1} alt='' />
                                    </div>
                                    <div class="content">
                                        <p class="heading">Card Hover</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="Pro-two-clom cardp-container">
                                <div class="cardp">
                                    <div class="front-content">
                                        <img src={Pro2} alt='' />
                                    </div>
                                    <div class="content">
                                        <p class="heading">Card Hover</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Pro-two-row">
                            <div class="Pro-two-clom cardp-container">
                                <div class="cardp">
                                    <div class="front-content">
                                        <img src={Pro3} alt='' />
                                    </div>
                                    <div class="content">
                                        <p class="heading">Card Hover</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="Pro-one-clom cardp-container">
                                <div class="cardp">
                                    <div class="front-content">
                                        <img src={Pro4} alt='' />
                                    </div>
                                    <div class="content">
                                        <p class="heading">Card Hover</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Pro-two-clo cardp-container">
                        <div class="cardp">
                            <div class="front-content">
                                <img src={Pro5} alt='' />
                            </div>
                            <div class="content">
                                <p class="heading">Card Hover</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipii
                                    voluptas ten mollitia pariatur odit, ab
                                    minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                    necessitatibus dignissimos molestias.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Pro-btn">
                    <button class="hero-btn">
                        <span>
                            See More
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects
