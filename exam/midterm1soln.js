let sampleJson = { name:"ram",age:30,skills:["java","python"],location:{
    city:"fairfield",zip:52556
}};

// {
//     '30': 'age',
//     ram: 'name',
//     javapython: 'skills',
//     cityfairfieldzip52556: 'location'
//   }
function reverse(json){
    let newJson = {};
    for(let key in json){
        if(Array.isArray(json[key]))
            {
                let key1 =''
                for(let ele of json[key]){
                    key1+=ele
                }
                newJson[key1]=key;
            }
        else if(typeof json[key]=='object'){
            let key1='';let value = json[key];
            for(let key2 in value){
                key1+=key2+value[key2]
            }
            newJson[key1]=key;
        }
        else
            newJson[json[key]]=key;


    }
    return newJson;
}
console.log(reverse(sampleJson));

let jsonArray = [{name:"John",salary:1000},{name:"Peter",salary:2000}]
//{ John: 1000, Peter: 2000 }
function modifyObject(json){
    let newJson = {};
    for(let ele of json){
        newJson[ele.name]=ele.salary;
    }
    return newJson;
}
console.log(modifyObject(jsonArray));
let matrix =[[1,20,3],[3,4,5,9],[6,7]];
//[ 10, 24 ]
// [1,2,3] - 
// [3,4,5]
// [6,7]

function findRowColSum(matrix){
    let colSum = 0;
    let rowSum = 0;
    for(let ele of matrix){
        colSum+=ele[0];
    }
    for(let ele of matrix[0] ){
        rowSum+=ele
    }
    return [rowSum,colSum]
}
console.log(findRowColSum(matrix));
console.log(findRowColSum([[1,5],[10,7,8]]))

function drawRightAngle(count){
    for(let i =1;i<=count;i++){
        let print='';
        for(let j = 1;j<=i;j++){
            print+=j+' ';
        }
        console.log(print)
    }
}

drawRightAngle(4);
drawRightAngle(9)

function spliceMock(array,index,deleteCount,insert1){
    let newArray = [];
    for(let i=0;i<array.length;i++){
        if(i==index &&insert1!=null){
            if(Array.isArray(insert1))
                newArray = newArray.concat(insert1)
            else
                newArray.push(insert1);
        }
        if(i<index || i>=index+deleteCount)
            newArray.push(array[i]);
        
    }
    return newArray;
}
console.log(spliceMock([1,2,3,4,5],2,0,[55,5555]))
console.log(spliceMock([1,2,3,4,5],1,1,['hello']))
console.log(spliceMock([1,2,3,4,5],1,0))