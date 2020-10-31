import React from "react";

class Skills extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          visible: false 
      };
  }

 

  componentDidMount(){
    var element = document.querySelector('.skills-progress');

    window.addEventListener('scroll', () => {
        
        var position = element.getBoundingClientRect(); 
        if(position.top < window.innerHeight && position.bottom >= 0) {
            this.setState({ visible: true });
        }else{
            this.setState({ visible: false });
        }
    });
  }

 

 
  render() {
    
    const data = this.props.skills;
    var dev = data.filter(x => x.hasOwnProperty('cat') && x.cat === 'dev');
    var design = data.filter(x => x.hasOwnProperty('cat') && x.cat === 'design');
    return (
        <React.Fragment>
            <div className="section-des">
                Front end developement
            </div>
            <ul className="skills-progress">
                {
                    
                    dev.map((item) =>{
                        return(
                            <li key={item.skill}>
                                <span className="name">{item.skill}</span>
                                <div className="skill" style={this.state.visible ? {width:'63%'}: null}>
                                    <div className="skill-fill" data-fill="100%" style={{width: item.level}}></div>
                                </div>
                            </li> 
                        )
                    })
                }
            </ul>

            <div className="section-des">
                Web design
            </div>
            <ul className="skills-progress">
            {
                    design.map((item) =>{
                        return(
                            <li key={item.skill}>
                                <span className="name">{item.skill}</span>
                                <div className="skill" style={this.state.visible ? {width:'63%'}: null}>
                                    <div className="skill-fill" data-fill="100%" style={{width: item.level}}></div>
                                </div>
                            </li> 
                        )
                    })
                }
            </ul>
        </React.Fragment>
        

    );
  }
}

export default Skills;
