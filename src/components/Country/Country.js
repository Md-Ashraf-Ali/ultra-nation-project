import React from 'react';

const country = (props) => {
    const {name,population,region,flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {
        height :'50px'
    }
    const divStyle = {
        height : '300px',
        margin : '10px',
        border : '2px solid',
        borderRadius : '10px',
        backgroundColor : 'lime',
        textAlign : 'center',
    
        

    }
    return (
        <div style = {divStyle}>
            <h1>country name: {name}</h1>
            <img style ={flagStyle} src={flag} alt=""/>
            <h2> population is {population}</h2>
            <h3>region :{region}</h3>
            <button onClick = {()=>handleAddCountry(props.country)}>AddCountry</button>
        </div>
    );
};

export default country;