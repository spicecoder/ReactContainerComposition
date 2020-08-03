import React from 'react';


function Clist({members}) {
 
  const divStyle = {
    color: 'orange',
    background:'green',
    
    padding :'10px'
  };


  const items = []
  console.log("members" + members);
  for (const [index, value] of members.entries() ) {
  
    items.push(<li key={index}>{value}</li>)
  }

  return (
    <div  style= {divStyle} >
      {items}
    </div>
  )
 
}

export default Clist;
