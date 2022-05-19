import React from 'react'

function MemoComp(props) {
    console.log("Rendering Memo component")
  return (
    <div>MemoComp {props.name}</div>
  )
}

export default React.memo(MemoComp)