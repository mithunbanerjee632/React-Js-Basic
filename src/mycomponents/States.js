import React,{Component} from 'react'
class States extends Component{

    constructor(){
      super()
      this.state={
        name:'Mithun Banerjee',
        age:["22","24","25","27"],
        height:'5 feet 6 inch',
        weight:{
          class7:["40 kg","35kg","38kg"],
          class10:"50 kg",
          HSC:"54 kg",
          BSC:"64 kg"
        }
      }

    }



  render(){
    return <div>
      <h1>Name: {this.state.name}</h1>
      <h1>Age: {this.state.age[2]}</h1>
      <h1>Height: {this.state.height}</h1>
      <h1>Weight: {this.state.weight.class7[2]}</h1>
    </div>
  }
}

export default States;