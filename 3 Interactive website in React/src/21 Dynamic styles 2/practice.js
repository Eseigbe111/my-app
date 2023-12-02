

/*function sq(){
    let low = [1,2,3,4,5]
    let evenNum = low.map((item, index) => (
        index %2 ===0? index : "null"

    ))
    console.log(evenNum)
}

sq()
*/
function real(rel=[1,2,3,4,5]){
    let nw=rel.map((item, index) =>(
       item%2===0? index:''
    ))
    console.log(nw)
}

real()
