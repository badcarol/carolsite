import React from "react";
import Home from "./page/home";
import Sidemenu from "./component/sidemenu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      portfolio: [],
      nav: [],
      gallery:[],
      visible: false
    };
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this)
  }

  componentDidMount() {
    const data = {
      link: process.env.REACT_APP_DATA,
      option: {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "secret-key": process.env.REACT_APP_SECRETKEY,
        },
      },
    };

    fetch(data.link, data.option)
      .then(function (res) {
        return res.json();
      })
      .then((res) => {
        if (
          res.hasOwnProperty("nav") &&
          res.hasOwnProperty("portfolio") &&
          res.hasOwnProperty("skills") &&
          res.hasOwnProperty("portfoliogallery")
        ) {
          //   console.log(res)
          this.setState({
            skills: res.skills,
            portfolio: res.portfolio,
            nav: res.nav,
            gallery: res.portfoliogallery
          });
        }
      });
  }

openMenu(){
  document.getElementById('mobilemenu').classList.remove("fadeOut");
  document.getElementById('mobilemenu').style.display = "block";
  document.getElementById('mobilemenu').classList.add("fadeIn");
  
}

closeMenu(){ 
  document.getElementById('mobilemenu').classList.remove("fadeIn");
  document.getElementById('mobilemenu').classList.add("fadeOut");
  setTimeout(() => {document.getElementById('mobilemenu').style.display = "none";},200);
}

  render() {
    return (
      <React.Fragment>
        <button id="menuOpen" className="openMenu rotate-center-menu" onClick={this.openMenu}>
          <i className="fas fa-hamburger"></i>
        </button>
        <div className="s-nav mobile" id="mobilemenu">
        <button className="closebtn" onClick={this.closeMenu}>X</button>
          <Sidemenu nav={this.state.nav} menu={this.closeMenu}></Sidemenu>
        </div>
      
      <div className="container">
        <div className="page-wrapper">
          <div className="s-nav desktop">
            <Sidemenu nav={this.state.nav}></Sidemenu>
          </div>
          <Home portfolio={this.state.portfolio} skills={this.state.skills} gallery={this.state.gallery}></Home>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
