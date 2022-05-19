import {React,Component} from 'react';

class ArrayList extends Component{
    constructor(){
        super()
        this.state = {
            stationary:['pen','pencil','erraser']
        }    
    }

    render(){
        const dataItem = this.state.stationary.map((data, index)=>{
            return <li key={data} style={{color:'blue'}}>{data}</li>}
        )
        return(
            <div>

            </div>
        )
    }
}


export default ArrayList;