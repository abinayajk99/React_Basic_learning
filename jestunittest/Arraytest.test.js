const Employee = ['Ram',"Abi","Kushal"]

test("check on employees for presence of array element",()=>{
    expect(Employee).toContain("Kushal")
})