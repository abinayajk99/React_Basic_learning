import React from "react";
const World =() =>{
    return(
        React.createElement(
            'div',
            {className:"red"},
            React.createElement(
                "h1",
                {backgroundColor:'pink'},
                "without jsx"
            )
        )
    )
}

export default World;