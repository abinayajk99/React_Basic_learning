function sum(a,b){
    return a+b;
}


module.exports = sum;


const empName = ['xyz','abc','def']

function name(emp){
    const Employeename = empName.map((name,index)=>{
        if (name == emp)
        {
            return name;
        }
    
    })
}