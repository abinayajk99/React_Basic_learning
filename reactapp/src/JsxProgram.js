//with jsx
// const Hello = () =>{
//     return(
//         <div>
//             <h1>JSXprogram</h1>
//         </div>
//     )
// }

import React from "react";
import 'App.css';


//without jsx
const Hello = () => {
    return React.createElement(div,{className:'divcolor'},React.createElement("h1",null,"hello"));
}
export default Hello;