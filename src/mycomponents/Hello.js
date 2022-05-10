import react from 'react';
function Hello(props){
    function Click(){
      alert('Button Is Clicked!');
    }
  return(
    <div>
       <button onClick={Click}>Click Here</button>
       <h1>Name: {props.name} And Age: {props.age}</h1>
    </div>


   
  );
}
export default Hello;