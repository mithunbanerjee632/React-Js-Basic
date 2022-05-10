import react from 'react';
function Hello(props){
    function Click(a){
      alert(a);
    }
  return(
    <div>
       <button onClick={Click.bind(this,"Hello i am from parameter")}>Click From Function</button>
       <h1>Name: {props.name} And Age: {props.age}</h1>
    </div>


   
  );
}
export default Hello;