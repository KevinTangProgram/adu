export default function navigationbar()
{
    return (
        <div className="topGrid">
            <div>
                <a href="/" style={{"width": "80px"}}><img src="logo.png" className="fitSize"></img></a>
                <header className="navigationBar">
                    <nav>
                        <ul>
                            <li><a href="/#/portfolio" className="hover-underline-animation">PORTFOLIO</a></li>
                            <li><a href="/#/homes" className="hover-underline-animation">YOUR NEW HOMES</a></li>
                            <li><a href="/#/works" className="hover-underline-animation">HOW IT WORKS</a></li>
                            <li><a href="/#/plans" className="hover-underline-animation">DOWNLOAD FREE PLANS</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}