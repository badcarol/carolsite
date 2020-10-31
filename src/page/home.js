import React from 'react';
import { Link } from 'react-scroll';

import Portfolio from './portfolio';
import Skills from './skills';
import PopBox from "../component/popbox";

class Home extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selected: null,
            ani:true
        };
  
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this)
    }

    handleClose(){
        this.setState({
            visible: true
        })
        setTimeout(()=> {document.getElementById('popbox').style.display = "none";}, 700)
    }

    handleOpen(e){    
        this.setState({
            selected: e.currentTarget.getAttribute('code'),
            visible: true
        })

        document.getElementById('popbox').style.display = "block";
    }

    componentDidMount(){
       this.ani();
    }

    ani(){
        var text = document.getElementById('text');
        var text1 = document.getElementById('text1');
        var text2 = document.getElementById('text2');
        var text3 = document.getElementById('text3');
        var text4 = document.getElementById('text4');

        setTimeout(() => {
            text.classList.add('rotate-down');
            text1.classList.add('rotate-up');
            text1.style.display = "block";
        }, 1500);
        setTimeout(() => {
            text1.style.display = "block";
            text1.classList.add('rotate-up');           
        }, 1600);
        setTimeout(() => {
            text1.classList.remove('rotate-up'); 
            text1.classList.add('rotate-down');
            text1.style.display = "none";
            text2.style.display = "block";
            text2.classList.add('rotate-up');           
        }, 4000);
        setTimeout(() => {
            text2.classList.remove('rotate-up');
            text2.classList.add('rotate-down');
            text2.style.display = "none";
            text3.style.display = "block";
            text3.classList.add('rotate-up');           
        }, 4100);
        setTimeout(() => {
            text3.classList.remove('rotate-up');
            text3.classList.add('rotate-down');
            text3.style.display = "none";
            text4.style.display = "block";
            text4.classList.add('rotate-up');           
        }, 7000);

        setTimeout(() => {this.setState({ani:false})},8000);
    }

    

    render() {
       
        return (
            <React.Fragment>
                <section id="home" name="home" className="section section-active">
                    <div className="container-wrap">                        
                        <h1 className="entry-title">
                            Hello! <br/>
                            <div id="text">I’m Carol Chaw.</div>
                            <div id="text1"> I'm a Front-end Developer</div>
                            <div id="text2"> Also a Web UI/UX Specialist</div>
                            <div id="text3"> Based in Kuala lumpur, Malaysia</div>
                            <div id="text4"> Nice to meet you!</div>
                        </h1>

                        <Link className="main-btn slow-scroll" activeClass="current" to="about" spy={true} smooth={true} duration={500}>
                            <img src='../img/scroll-icon.svg' alt="scroll"/>
                            <span className="textabout">About Carol</span>
                        </Link>
                    </div>
                    
                </section>

                <section id="about" name="about" className="section section-active">
                    <h2 className="title">ABOUT ME</h2>
                    <div className="section-des">
                        I'm Carol, a Front-End Developer.
                    </div>
                    <div className="content-670">
                        <p>
                            A designer that loved to code that transitioned from designer to Front-End Developer. <br/>
                            More than 10+ years experiences on web front end developement and design.<br/>
                            I like to work with team to get more ideas and learing from each other. Team Spirit! <br/>
                            Passion on coding, learning, travelling, food hunting, cat person and also Arsenal.
                        </p>
                        <p>
                            I can speak and write in <i>English, Chinese, Cantonese, Bahasa Malaysia and basic Korean</i>.<br/>
                            Feel free to chat with me in different languages! 
                        </p>
                    </div>
                    {/* <img className="about-img block-right" src="img/about-img.jpg" alt=""></img> */}
                    
                </section>

                <section id="portfolio" name="portfolio" className="section section-active">
                    <h2 className="title">Recent Work</h2>
                    <Portfolio portfolio={this.props.portfolio} visible={this.state.visible} open={this.handleOpen}/>
                </section>

                <section id="skills" name="skills" className="section section-active">
                    <h2 className="title">SKILLS</h2>                   

                    <Skills skills={this.props.skills}/>                   

                </section>

                <section id="contact" name="contact" className="section section-active">
                    <h2 className="title">CONTACT</h2>
                    <div className="section-des">
                        Feel free to contact me via email: badcarol89@hotmail.com
                    </div>

                </section>
                

                <PopBox close={this.handleClose} visible={this.state.visible} gallery={this.props.gallery} code={this.state.selected}/>
            </React.Fragment>
        )
    }
}

export default Home;