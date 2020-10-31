import React from "react";


class Portfolio extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};

  }  


  render() {
      
    return (
        <React.Fragment>
            <div id="portfolio-wrapper" className="relative block-right">
                <div className="grid">
                {
                    this.props.portfolio.map(item =>{   
                        return(
                            <div className="item-link" key={item.id}>
                                <div className="port-title">{item.title}</div>
                                <img className="port-img" src={item.image} alt="self"/>
                                <div className="port-text-holder">
                                    <p className="port-cat">{item.desc}</p>
                                    <button className="btn" onClick={this.props.open} code={item.code}>       
                                        <i className="fas fa-cat"></i><span>More</span>  
                                    </button>
                                </div>
                            </div>  
                        )
                    })
                }
                </div>            
        </div>

        
      </React.Fragment>
    );
  }
}

export default Portfolio;
