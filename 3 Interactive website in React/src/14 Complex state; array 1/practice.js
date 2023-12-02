const thingsArray = ["Thing 1", "Thing 2"];
const newArray = [...thingsArray];
//console.log(newArray); 


    
    
    for (let i = thingsArray.length + 1; i <= thingsArray.length +3; i++){
       let narr = `Thing ${i }`
        newArray.push(narr)
    }

   
    console.log(newArray)
