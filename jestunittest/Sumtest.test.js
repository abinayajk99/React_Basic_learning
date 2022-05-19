const sum = require("./Sumtest");
test("Addition of two numbers",()=>{
    expect(sum(4,5)).toBe(9);
})

test("Finding emp name",()=>{
    expect(sum("xyz")).toContain("xyz");
})