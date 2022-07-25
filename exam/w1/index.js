/*
Q1
transform([{name:"John",salary:1000},{name:"Peter",salary:2000}])=> { John: 1000, Peter: 2000 }
*/

function transform(arr) {
    let res = {}
    arr.forEach(a => res[a.name] = a.salary)
    return res;
}

console.log(transform([{ name: "John", salary: 1000 }, { name: "Peter", salary: 2000 }, { name: "Abebe", salary: 2000 }, { name: "Ahmed", salary: 1000 }]));

/*
Q2
Write the program to draw the RightAngle on screen, the size is based on user Input.

NOTE: The program doesnt return anything, it just prints the following on the screen when it is run.

drawRightAngle(4) =>

1 
1 2 
1 2 3 
1 2 3 4

drawRightAngle(9) =>

1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
1 2 3 4 5 6 
1 2 3 4 5 6 7 
1 2 3 4 5 6 7 8 
1 2 3 4 5 6 7 8 9 
*/

function drawRightAngle(num) {
    if (num === 0) return
    let prev = ''
    for (let i = 1; i <= num; i++) {
        prev += ' ' + i;
        console.log(prev);
    }
}

drawRightAngle(9);


/*
Q3
Caluculate the first row Sum and first column Sum of the matrix

Ex:      [[1,5],

            [10,7,8]]

Row1 - [1,5]   Row2 - [10,7,8]

Col1 -  [1,10]   Col2 - [5,7]        Col3- [8]

findRowColSum([[1,5],[10,7,8])=>[6,11]

findRowColSum([[1,20,3],[3,4,5,9],[6,7]])=>[24,10]

findRowColSum([[1,2],[1]])=>[3,2]

*/

function findRowColSum(arr) {
    return arr.reduce((a, b) => {
        let first = [...b];
        let rsum = !a[0] ? arr[0].reduce((a, b) => a + b) : a[0];
        let csum = a[1] ? a[1] + first[0] : first[0];
        return [].concat(rsum, csum)
    }, [])
}

console.log(findRowColSum([[1, 5], [10, 7, 8]]));


/*
Q4

Reverse keys to values and values to keys in the json

reverseJson(

{ name:"ram",age:30,skills:["java","python"],location:{

city:"fairfield",zip:52556

}})

=>

{

'30': 'age',

ram: 'name',

javapython: 'skills',

cityfairfieldzip52556: 'location'

}
*/

function reverseJson(obj) {
    let res = {};
    let keys = Object.keys(obj);
    for (let k of keys) {
        if(Array.isArray(obj[k])) {
            obj[k] = obj[k].reduce((a,b) => a+b)
        }
        if(typeof(obj[k]) == 'object') {
            let kk = Object.keys(obj[k])
            let concated = ''
            for (let k2 of kk) {
                concated = concated.concat(k2, obj[k][k2])
            }
            obj[k] = concated
        }
        res[obj[k]] = k;
    }
    return res;
}

console.log(reverseJson({
    name: "ram", age: 30, skills: ["java", "python"], location: {
        city: "fairfield", zip: 52556
    }
}));

/*
Q5

Implement Splice(NOTE: dont use splice)

spliceMock([1,2,3,4,5],2,0,[55,5555]) => [1, 2, 55, 5555, 3,  4,5]

spliceMock([1,2,3,4,5],1,1,['hello']) => [ 1, 'hello', 3, 4, 5 ]

spliceMock([1,2,3,4,5],1,1,['hello']) => [ 1, 'hello', 2, 3, 4, 5 ]

spliceMock([1,2,3,4,5],1,0) => [ 1, 2, 3, 4, 5 ]
*/
 function spliceMock(arr, start, deleteCount, newArr) {
    let res = [];
    let i = 0;
    while (i < arr.length) {
        if (i >= start && i < start + deleteCount) {
            i++;
            continue;
        }
        res.push(arr[i]);
        i++;
    }
    if(newArr){
        let stArr = []
        for(let j = 0; j<start; j++){
            stArr.push(res[j])
        }
        let enArr = []
        for(let j = start; j< res.length; j++){
            enArr.push(res[j])
        }
        res = stArr.concat(newArr, enArr);
    }
    
    return res;
}

console.log(spliceMock([1,2,3,4,5],2,0,[55,5555]));