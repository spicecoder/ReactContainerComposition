import React from 'react';
import C_list from "./c_list";
import C_add_c from './c_add_c';

function Caddlistcontainer() {
    const divStyle = {
        color: 'blue',
        background:'green',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr ',
        padding :'10px'
      };
      const elements = ['one', 'two', 'three'];
      return (<div style = {divStyle} >
          <C_add_c></C_add_c>
          <C_list  members ={elements}></C_list>
      </div>)

}
export default Caddlistcontainer;
