import React from 'react';
import {useState} from 'react';
import C_addform from "./c_addform";
import C_addbutton from './c_addbutton';

function Caddcontainer() {
    const divStyle = {
        color: 'blue',
        background:'red',
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        padding :'10px'
      };
      const [renderingNow,setrenderingNow]=useState("button"); 
const dataAdded = ""; 
//buttonState : "init", "addclicked","inputText","saveon","saveclicked"
  const saveDataHandler =  (e) => { const {name,value} =e.target;alert ("data recceived"+ e.target[0].value)}
  
    const addClickHandler = ()  => { 
    document.getElementById("container").style.gridTemplateColumns = "3fr 1fr";
    setrenderingNow ("addform");
    }  
switch (renderingNow) {

case 'button' :
    return ( <div   id ="container"  style={divStyle}   >
    <C_addbutton clickhand = {addClickHandler} >ADD </C_addbutton>  
    </div> 
    ) 

case 'addform'  :
      return (
      <div   id ="container"  style={divStyle}   >
     <C_addform savehand = {saveDataHandler}></C_addform>
      </div>
  )
 
      default :  return (<div> Failed rendering ; {renderingNow}</div>)
  
 }
}
export default Caddcontainer;
