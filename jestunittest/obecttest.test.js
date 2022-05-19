const student = {
    rollno:101,
    name:"petter"
}


test("To test for student on its property",()=>{
    expect(student).toHaveProperty('rollno');
    expect(student).not.toHaveProperty('salary');
})