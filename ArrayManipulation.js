const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

manipulateArray=(arr)=>{
    let arr2 = arr.map((num)=>{
        return num * 2;
    })
    let arr3 = arr2.filter((num)=>{
        return num>10;
    })
    let arr4 = arr3.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue
    })
    return arr4;
}

console.log(manipulateArray(arr));