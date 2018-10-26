import React, { Component } from 'react';

export default class Stateitem extends Component 
{
render()
{
return(

       <div className="App">
        
        <button>
          <button  label="C" value="clear" > clear </button>
          <button  label="7" value="7" > 7 </button>
          <button  label="4" value="4" > 4 </button>
          <button  label="1" value="1" > 1 </ button> 
          <button  label="0" value="0" > 0 </button>

          <button  label="/" value="/" > / </ button>
          <button  label="8" value="8" > 8 </button> 
          <button label="5" value="5" > 5 </button>
          <button  label="2" value="2" > 2 </button>
          <button label="." value="." > . </button>

          <button  label="x" value="*" > * </button>
          <button label="9" value="9" > 9 </button>
          <button  label="6" value="6" >6 </button>
          <button  label="3" value="3" > 3 </button>
          <button label="" value="null" > null </button>

          <button  label="-" value="-" > - </button> 
          <button  label="+" size="2" value="+" > + </button>
          <button  label="=" size="2" value="equal" > = </button>
        </button>
      </div>


);
}
}