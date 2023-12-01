export default function footer()
{
    return (
        <div style={{"display": "grid", "height": "200px", "backgroundColor": "black", "gridTemplateColumns": "25% 25% 20% 30%"}}>
            <div>
                <a href="/#/about"><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">About Us</h3></a><br></br>
                <a href="/#/about"><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">Learn More</h3></a><br></br>
                <a href="/#/about"><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">Let's Get Started</h3></a><br></br>
                <a href="/#/about"><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">Our Strategic Partners</h3></a>
            </div>
            <div>
                <h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}}>Popular Projects and Plans</h3><br></br>
                <h4 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px", "marginTop": "0"}}>1 bedroom, 1 bath</h4>
                <h4 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}}>2 bedroom, 2 bath</h4>
                <h4 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}}>4 bedroom, 2 bath</h4>
            </div>
            <div>
                <a href="/#/contact"><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">FAQ</h3></a><br></br>
                <a href="/#/contact"><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">Subscribe</h3></a><br></br>
                <a href="/#/form"><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">Contact Us</h3></a><br></br>
            </div>
            <div>
                <h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}}>Address: 7950 Cherry Ave. Fontana, California 91739</h3>
                <h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}}>Phone: (909)-856-9967</h3>
                <h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}}>Email: che@tang-se.com</h3>
            </div>
        </div>
    )
}