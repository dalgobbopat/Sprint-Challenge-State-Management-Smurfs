import React from 'react';

const SmurfCard = (props) => {
    return (
       
             <div className="smurf">
                <h2>Name: {props.data.name}</h2>
                <h3>Age: {props.data.age}</h3>
                <h3>Height: {props.data.height}</h3>
                <img src='https://cdn.vox-cdn.com/thumbor/oIRY68qFM3SiUyNQWoYwt_c3BM4=/0x0:2560x1600/1200x800/filters:focal(1662x443:2070x851)/cdn.vox-cdn.com/uploads/chorus_image/image/54121337/smurfscover.0.jpg' width='250' height='200' alt='smurfs picture'/>
            </div>
      
    )
}

export default SmurfCard;