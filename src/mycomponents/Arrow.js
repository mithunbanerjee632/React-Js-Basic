import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// function Arrow(){
//   return(
//     <button>Arrow Button</button>
//   );
// }


const Arrow2=(a)=>{
 alert(a);
}


const Arrow=()=>{
  return(
    <button onClick={Arrow2.bind(this,"I am from Arrow function")} className="btn btn-danger">Arrow Button</button>
  );
}

export default Arrow;