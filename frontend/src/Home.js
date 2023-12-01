import { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

export default function Home() {

    return (<>
        <Navbar/>
        <div style={{"display": "grid", "gridTemplateColumns": "60% 40%", "width": "95%", "marginBottom": "2em"}}>
            <div style={{"display": "flex", "flexDirection": "column", "marginTop": "auto", "marginBottom": "auto"}}>
                <h2 style={{"textAlign": "center", "fontSize": "26px", "marginTop": "0"}}>Mission Statement</h2>
                <p1 style={{"textAlign": "center", "marginLeft": "auto", "marginRight": "auto", "width": "70%", "fontSize": "18px", "color": "grey", "lineHeight": "150%"}}>At LOV Homes, our mission is to revolutionize the concept of homeownership by making high-quality, affordable homes accessible to everyone. We firmly believe that every individual and family deserves the opportunity to live in a place they can call their own, a place that provides comfort, security, and a sense of belonging. With this vision in mind, we are committed to transforming the real estate landscape by offering a diverse range of homes that cater to various needs, lifestyles, and budgets.</p1>
            </div>
            <div>
                <img src="home.jpg" style={{"width": "100%"}}></img>
            </div>
        </div>
        <div style={{"display": "grid", "gridTemplateColumns": "60% 40%", "width": "95%", "marginBottom": "2em"}}>
            <div>
                <img src="timeline.jpg" style={{"width": "100%"}}></img>
            </div>
            <div style={{"display": "flex", "flexDirection": "column", "marginTop": "auto", "marginBottom": "auto"}}>
                <h2 style={{"textAlign": "center", "fontSize": "26px"}}>Innovative Approach</h2>
                <p1 style={{"textAlign": "center", "marginLeft": "auto", "marginRight": "auto", "width": "90%", "fontSize": "18px", "color": "grey", "lineHeight": "150%"}}>We've pioneered an innovative construction approach that greatly accelerates home construction, significantly reducing costs and enhancing quality. Our patented method encompasses three phases: laying a robust foundation for lasting structural integrity; constructing the core structure of the house with exceptional speed and precision; focusing on an architectural finish that harmonizes with the community and creates a welcoming living environment for homeowners.</p1>
            </div>
        </div>
        <div style={{"display": "grid", "gridTemplateColumns": "60% 40%", "width": "95%", "marginBottom": "5em"}}>
            <div style={{"display": "flex", "flexDirection": "column", "marginTop": "auto", "marginBottom": "auto"}}>
                <h2 style={{"textAlign": "center", "fontSize": "26px", "marginTop": "0"}}>Greener, Smarter, Faster</h2>
                <p1 style={{"textAlign": "center", "marginLeft": "auto", "marginRight": "auto", "width": "70%", "fontSize": "18px", "color": "grey", "lineHeight": "150%"}}>We have reimagined the construction process, leveraging innovative techniques that significantly saving money while maintaining the highest quality standards. Our patented methods allow you to work smarter, streamlining the construction timeline, and eliminating the unpredictable nature that is so often associated with building a new home. By choosing LOV Homes, you get more value for your investment, a quicker path to homeownership, and the satisfaction of knowing you've made the right choice.</p1>
            </div>
            <div>
                <img src="choose.jpg" style={{"width": "100%"}}></img>
            </div>
        </div>
        {/*
        <video autoPlay="autoPlay" muted className="homeVideo">
            <source src="ezgif-1-cb05ee74e1.mp4" type="video/mp4"></source>
        </video>
        <div style={{"display": "grid", "width": "90%", "marginRight": "auto", "marginLeft": "auto","marginBottom": "40px"}}>
            <p1 style={{"marginTop": "50px", "fontSize": "30px", "marginBottom": "24px"}}>OUR MISSION</p1>
            <div style={{"display": "grid", "gridTemplateColumns": "50% 50%"}}>
                <p2 style={{"marginBottom": "0", "fontSize": "18px", "color": "grey", "marginRight": "5%"}}>At LOV Homes, our mission is to revolutionize the concept of homeownership by making high-quality, affordable homes accessible to everyone across the Greater Southern California area. We firmly believe that every individual and family deserves the opportunity to live in a place they can call their own, a place that provides comfort, security, and a sense of belonging. With this vision in mind, we are committed to transforming the real estate landscape by offering a diverse range of homes that cater to various needs, lifestyles, and budgets.<br></br><br></br>Our dedication to excellence goes beyond providing affordable housing; it encompasses the very essence of home. We are unwavering in our commitment to crafting homes that not only meet the highest quality standards but also reflect the unique aspirations and dreams of our customers.</p2>
                <div>
                    <p2 style={{"marginBottom": "px", "fontSize": "18px", "color": "grey", "marginleft": "5%"}}>Through our unique, patented approach, sustainable construction practices, and strategic partnerships, we aim to create communities where individuals and families can thrive, build memories, and enjoy the fulfillment of homeownership. LOV Homes is not just a name; it's a promise—a promise to make the dream of owning a high-quality, affordable home a reality for everyone in Southern California. Together, we are building a brighter future, one home at a time.</p2>
                    <div style={{"display": "grid", "gridTemplateColumns": "50% 50%", "marginTop": "40px", "marginRight": "5%"}}>
                        <div className="learnMoreOutline" style={{"marginLeft": "auto", "marginRight": "auto"}}>
                            <a className="learnMoreBox hover-highlight-animation1 whiteLink" href="/about">Learn More</a>
                        </div>
                        <div className="learnMoreOutline" style={{"marginLeft": "auto", "marginRight": "auto"}}>
                            <a className="learnMoreBox hover-highlight-animation whiteLink" href="/homes">Getting Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        */}
        <Footer/>
    </>)
}