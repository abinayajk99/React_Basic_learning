
import {React,Component} from 'react';

class Greet extends Component{

    constructor(){
        super()
        this.state = {
            name:'welcome visiter'
        }    
    }

    changeName(){
        this.setState({
            name : "thank you for visiting"
        })
    }

    inputNameEvent(event){
        this.setState({
            name:event.target.value
        })
    }
    render(){
        return (
         <div>
             Enter your name : <input type="text" name="username" value={this.state.name} onChange={(event)=>this.inputNameEvent(event)}></input><br/>
             <button onClick={()=>this.changeName()}>ClikMe</button>
            <h1>Greet!!!{this.state.name}</h1>
        </div>   
        
        );
    }
}

export default Greet;