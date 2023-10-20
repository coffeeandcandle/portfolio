import React, {useRef, useEffect, useState} from 'react'
import {Link, Outlet} from 'react-router-dom'
import '../css/style.css';
import '../css/theme-icons.css';
import '../css/animation.css';
import banner from '../assets/banner-img.png';
import Footer from '../layouts/Footer.js';

function Home() {
    
    
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in-element');
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fadeInUp')
            }
          });
        });
    
        elements.forEach((element) => {
          observer.observe(element);
        });
    
        return () => {
          elements.forEach((element) => {
            observer.unobserve(element);
          });
        };
      }, []);


    return (
        <div className='wrapper'>
            <section className="panel fitscreenSec bannerSec blueBg">

                <div className="container">

                    <div className="bannertitle"> 
                            <h1 className="bigtext">From idea <br/> to reality</h1>

                    </div>

                </div>

            </section>



            <section className="panel blueBg workSec overflow--scroll">

                <div className="container">

                    <div className="grid" style={{gridGap:'40px', backgroundImage: 'none'}}>

                        <a className="grid-item" href="work.html#temple">

                            <div className="workImg">

                                <img src={require("../assets/ART Design Group Test-1.jpg")} alt="" />

                            </div>

                        </a>

                        <a className="grid-item" href="work.html#gate-of-yemen">

                            <div className="workImg">

                                <img src={require("../assets/Hestory-1.jpg")} alt="" />

                            </div>

                        </a>

                        <a className="grid-item" href="work.html#lanara">

                            <div className="workImg">

                                <img src={require("../assets/FILO-1.jpg")} alt="" />

                            </div>

                        </a>

                        <a className="grid-item" href="work.html#base">

                            <div className="workImg">

                                <img src={require("../assets/Organa-1.jpg")} alt="" />

                            </div>

                        </a>
                        <a className="grid-item" href="work.html#base">

                            <div className="workImg">

                                <img src={require("../assets/Lanara-1.jpg")} alt="" />

                            </div>

                        </a>
                        <a className="grid-item" href="work.html#base">

                            <div className="workImg">

                                <img src={require("../assets/Temple-1.jpg")} alt="" />

                            </div>

                        </a>

                    </div>

                </div>

            </section>



            <section className="panel fitscreenSec blueBg iconSection" style={{padding:"0px"}}>

                <div className="container-fluid" style=
    {{paddingTop: "120px"}}>

                    <div>

                        <h4 className="secTitle">Digital design, <br className="d-block d-md-none" />tailored to the user.</h4>



                        <div className="iconBoxList">

                            <div className={`iconBox fade-in-element`}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/app-development.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">App Development</h4>

                            </div>

                            <div className={`iconBox fade-in-element`} >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/web-development.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Web Development</h4>

                            </div>

                            <div className={`iconBox fade-in-element`} >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/brand-strategy.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Brand Strategy</h4>

                            </div>

                            <div className="iconBox fade-in-element" >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/photography.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Photography</h4>

                            </div>

                            <div className="iconBox fade-in-element" >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/brand-identity.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Brand Identity</h4>

                            </div>

                            <div className="iconBox wow fade-in-element" >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/marketing.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Marketing</h4>

                            </div>

                            <div className="iconBox wow fade-in-element">

                                <div className="iconImg">

                                    <img src={require("../assets/svg/ui-ux.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">UI/UX</h4>

                            </div>

                            <div className="iconBox wow fade-in-element" >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/graphic-design.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Graphic Design</h4>

                            </div>

                            <div className="iconBox wow fade-in-element" >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/pitch-decks.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Pitch decks</h4>

                            </div>

                            <div className="iconBox iconTwo wow fade-in-element"  >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/company-formation.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Company formation</h4>

                            </div>

                            <div className="iconBox wow fade-in-element" >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/business-strategy.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Business strategy</h4>

                            </div>

                            <div className="iconBox wow fade-in-element">

                                <div className="iconImg">

                                    <img src={require("../assets/svg/packaging.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Packaging</h4>

                            </div>

                        </div>

                        <h4 className="starttheprocess" ><Link className="linkstart"
                            to='/get-in-touch'>Start the process</Link></h4>

                    </div>

                </div>

            </section>

            <section className="panel fitscreenSec goldBg simpleContent" data-color="dark">

                <div className="container">

                    <div className="simpleContentInner wow fade-in-element"  >

                        <h4 className="creativeAgencyTitle"> Businesses that shape the future </h4>

                        <p>We are a cutting-edge digital design agency that converges design, strategy, and execution. Our focus are startups and revolutionary ideas that shape the world. We present brands in their purest and most strategic form, adhering to a minimalistic and results-driven approach to branding, design, and user experience. Our commitment to advanced data methodologies sets us apart in the commercial sector.
                        </p>

                        <p>No idea is too big or too small; it's the vision that truly counts. We align ourselves with those who share our perspective, fostering collaboration and embracing limitless possibilities.</p>

                        <div className="agency">

                            <Link to='/agency'>The agency</Link>

                        </div>

                    </div>

                </div>

            </section>

            <section className="panel fitscreenSec blueBg sectionFour">

                <div className="container-fluid">

                    <div>

                        <h2 className="secTitle wow fade-in-element"  >Worldwide Coverage</h2>


                        <div className="iconBoxList">

                            <div className="iconBox wow fade-in-element" >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/paris.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Paris</h4>

                            </div>

                            <div className="iconBox wow fade-in-element" >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/dubai.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Dubai</h4>

                            </div>

                            <div className="iconBox wow fade-in-element"  >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/riyadh.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Riyadh</h4>

                            </div>

                            <div className="iconBox wow fade-in-element" >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/beirut.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Beirut</h4>

                            </div>

                            <div className="iconBox wow fade-in-element"  >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/monaco.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Monaco</h4>

                            </div>

                            <div className="iconBox wow fade-in-element"  >

                                <div className="iconImg">

                                    <img src={require("../assets/svg/london.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">London</h4>

                            </div>

                            
                        </div>
                        <p className="textUnderIcons">Lorum Ipsiimsdjinijfnvi sdibsdicbiusbd isdciuhsadu isduhvdsu</p>
                        <p className="text-center wow fade-in-element"  ><Link className="link"
                            to='/get-in-touch'>Explore our work</Link></p>
                    </div>
                </div>
            </section>
            <section className="fitscreenSec stepSec blueBg d-flex align-items-center">
                <div className="container">
                    <div className="stepCon text-center">
                        <h2 className="stepHed wow fade-in-element" >We are just a few
                            steps away..</h2>
                        <p className="wow fade-in-element" >Get the ball rolling</p>
                    </div>
                </div>
                <Footer color='white'/>
            </section>
            
            <Outlet />
            
        </div>
    )
}

export default Home
