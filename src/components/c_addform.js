import React from 'react';


function Caddform({savehand}) {
    

const handleChange=(event)=>{
    const {name,value} =event.target;
     
};

 return (
    
    <form onSubmit ={savehand} >
            <label>New Data</label>
            <input type="text"   />
            
            <input type="submit"/>
        </form>
  




  );
}

export default Caddform;
