import React,{Component} from 'react'
class States extends Component{

    constructor(){
      super()
      this.state={
        name:'Mithun Banerjee',
        age:'27',
        height:'5 feet 6 inch',
        weight:'65kg'
      }

    }



  render(){
    return <div>
      <h1>Name: {this.state.name}</h1>
      <h1>Age: {this.state.age}</h1>
      <h1>Height: {this.state.height}</h1>
      <h1>Weight: {this.state.weight}</h1>
    </div>
  }
}

export default States;