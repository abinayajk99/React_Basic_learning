import React, { Component } from 'react'

export default class SampleTable extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         List :[{
            "rank": 1,
            "operator": "jio",
            "subsciber": "356.7",
            "market_share": "43.899%"
            },
            {
                "rank": 2,
                "operator": "airtel",
                "subsciber": "356.7",
                "market_share": "43.899%"
            },
            {
                "rank": 3,
            "operator": "vodophone",
            "subsciber": "356.7",
            "market_share": "43.899%"
            },
            {
                "rank": 4,
                "operator": "Relance",
                "subsciber": "356.7",
                "market_share": "43.899%"
            },


         ]
      }
    }
  render() {

    const mystyle = {
        width: "25%",
        backgroundColor: "DodgerBlue",
    }
    const ArrayList = this.state.List.map((item,index) => { 
        return(
            <tr>
                <td>{item.rank}</td>
                <td>{item.operator}</td>
                <td>{item.subsciber}</td>
                <td>{item.market_share}</td>
            </tr>
        )
        
    })
    return (
      <div>
          <br></br>
          <h1>SAMPLE Table</h1>
          <table  style = {{mystyle}}>
            <tbody>
                <tr>
                    <th>Rank</th>
                    <th>operator</th>
                    <th>Subscriber</th>
                    <th>market_share</th>
                </tr>
                {ArrayList} 
            </tbody>
          </table>
      </div>
    )
  }
}
