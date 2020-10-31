import React from 'react';
import { Link } from 'react-scroll'

const Sidemenu = (props) => {
   return(
    <React.Fragment>
        <div className="nav-container">
            <a className="site-title slow-scroll" href="#home">Carol</a>
            <nav className="nav-menu">
                <ul className="nav-list"> 
                {
                    props.nav.map(item => {
                        return(
                            <li key={item.id}>
                                <Link activeClass="current" onClick={props.menu} to={item.section} spy={true} smooth={true} duration={500}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }               
                    
                    <li onClick={props.menu}>
                        <a href="https://github.com/badcarol/carolsite/" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </li>                   
                    
                </ul>
            </nav>
        </div>

        <ul className="nav-soc">
            <li onClick={props.menu}>
                <a href="https://www.linkedin.com/in/carol-chaw-697502188/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </li>

            <li onClick={props.menu} className="about-info">
                This is a Reactjs App project. <br/>
                Check out on my Github below. <br/> 
                <a href="https://github.com/badcarol/carolsite/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github font4 rotate-center"></i>
                </a>
            </li>
        </ul>

        
    </React.Fragment>
   )
}

export default Sidemenu;