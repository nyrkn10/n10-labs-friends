 import React from "react";
 const Scroll = (props) =>{
    return (
        <div style={
            { 
        overflow: 'scroll',
          height: '500px',
          width: '98%',
          margin: '10px'
        }
          }>
            {props.children}
        </div>

    );
 };

 export default Scroll;