import React from 'react';
import { Slide } from 'react-slideshow-image';

const PopBox = (props) => {
   
    var content;
    const slideImages = [];
    const properties = {
        arrows: false,
        // prevArrow: <div className="prevBtn"><i className="fas fa-chevron-left"></i></div>,
        // nextArrow: <div className="nextBtn"><i className="fas fa-chevron-right"></i></div>
    };

    if(props.hasOwnProperty("gallery") && props.hasOwnProperty("code")){
        props.gallery.map(item => {                                      
            
            var selectedData = [];
            if(props.code === item.code){                
                selectedData = {"img": item.img, "title":item.title, "desc":item.desc, "tech":item.tech, "link":item.link}
                
                if(selectedData !== null && selectedData !== "" && typeof selectedData !== undefined){
                    console.log(selectedData)
                    Array.prototype.splice.apply(slideImages, [0, selectedData.img.length].concat(selectedData.img));
                    
                    content = (
                        <div className="content">
                            <div className="title">{selectedData.title}</div>
                            <p>
                                {selectedData.desc}<br/>
                                <span>{selectedData.tech}</span><br/>
                                {
                                    (selectedData.hasOwnProperty("link") && selectedData.link !== null) ?
                                        <a href={selectedData.link} target="_blank" rel="noopener noreferrer">
                                            <button className="btn">Visit Site</button>
                                        </a>
                                    :null
                                }
                            </p>
                           
                        </div>
                    )
                }
            }
            return null;       
        });
    }

        return (
            <div id="popbox" className={props.visible ? 'popbox slide-bottom' : 'popbox slide-up'} >
                <div className="popcontainer">
                    <button className="closebtn" onClick={props.close}>X</button>
                    <div className="gallery slide-container">
                        <Slide {...properties}>
                        {
                             slideImages.map((each, index) => 
                                <img key={index} src={each} alt="project"/>
                             )
                        }
                        </Slide>
                    </div>
                   
                    {content}
                </div>
            
            </div>
        )
    
        

}

export default PopBox;