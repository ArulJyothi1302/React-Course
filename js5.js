// task
function cube(){
    // console.log("cube")
    let ar1=[1,2,3,4,5,6];
    
    let sqr=ar1.map((v)=>{
      
    
      return Math.pow(v,3)
   
    })

  
    document.getElementById('cube').innerHTML=sqr

    sqr.forEach((v)=>{
        // document.getElementById('cube').innerHTML=v
        console.log(v)

    })
    
}

// MAP method

// Creating a MAP

const store = new Map([["Redmi",10000],["POCO",8000],["APPLE",800000],["ONE+",40000]]);

// Getting key value in map
store.forEach((value,key)=>{
    console.log(`${key}: ${value}`)
})
// GET method
let cart=0;
// 1method
cart+=store.get("POCO");
cart+=store.get("APPLE");

console.log(`Cart-value: ${cart}`);
// Another Method
let PremCart=0;
PrimCart=store.get("Redmi")+store.get("ONE+");
console.log(`PremCart-value: ${PrimCart}`);

//SET METHOD
store.set("SAMSUNG",65000);
store.forEach((value,key)=>{
    console.log(`${key}: ${value}`)
})

// DELETE METHOD()
store.delete("APPLE");
store.forEach((value,key)=>{
    console.log(`${key}: ${value}`)
})
// HAS

console.log(store.has("SAMSUNG"));
// SIZE 


console.log(store.size)