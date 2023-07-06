import React from 'react';
const Card = (props) => {

return(
    <div className = 'tc bg-dark-gray white dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='' src= {`https://robohash.org/${props.id}?200x200`} />
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p> 
        </div>
    </div>
);


}
export default Card;