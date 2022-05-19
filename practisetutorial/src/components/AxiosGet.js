import React, { Component } from 'react'
import axios from 'axios'
export default class AxiosGet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(
            response  => {
                console.log(response)
                this.setState({post:response.data})
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )
    }
  render() {
      const {post} = this.state
      console.log(";;;;;;;;;;post",post)
    return (
      <div>
          AxiosGet
            {
                post.length ? 
                post.map(post => <div key={post.id}>{post.title}</div>):
                null
            }
      </div>
    )
  }
}
