import React,{useState} from 'react'

function HookCounterTwo() {

    const initialCount = 0
    const [count,setCount] = useState(initialCount)
    const incremnetfive = () =>{
        for(let i=0 ; i<5;i++){
            // setCount(count+1)
            setCount(prevCount => prevCount+1)
        }
    }
  return (
    <div>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={incremnetfive}>Increment 5</button>

        <h1>{count}</h1>

    </div>
  )
}

export default HookCounterTwo