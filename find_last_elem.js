function findLastElem(data) {
 
  if (Array.isArray(data)) {
     return data.pop();  
  } 
   else if (typeof data === "string") {
    return data[data.length -1];
  } 
    else if (Number.isInteger(data)) {
    let str = data.toString();
    return Number.parseInt(str[str.length -1])
  } else {
    return "Check the type of data, and keep improving the function!"
  }
  
}


console.log(findLastElem( [1,2,3,4] )) // => 4
console.log(findLastElem( "xyzik" )  )   // => z
console.log(findLastElem( 1,2,3,4 ) )  // => 4
console.log(findLastElem([{name: "Val", age: 50},{name: "Peter", age: 45},{name: "Sam", age: 38}])) // => {name: "Sam", age: 38}
console.log(findLastElem([["Val", 50],[ "Peter", 45],[ "Sam",  38]])) // => ["Sam", 38]
console.log(findLastElem(undefined))
console.log(findLastElem(NaN))