//JSON- Javascript Object notation
//JSON stands for JavaScript Object Notation
//JSON is a lightweight data-interchange format
//JSON is plain text written in JavaScript object notation
//JSON is used to send data between computers
//JSON is language independent 

//RULES 

//Data is written within curly braces{}
//Key should be enclosed in double quotes"" and key and value should be separated by comma

//Datatypes in json

//Number,String,Boolean,Array,Object,Null
//_____________________________________________________________________________________________________________________________________________


//BY USING FOR LOOP
var arr=[{"nam":"guvi",
          "age":23,
},
       {
    "nam": "bob",
    "age":24}]
console.log(arr[0].nam)
console.log(arr[1].nam)
for(var i=0;i<arr.length;i++){
    console.log(arr[i].nam,arr[i].age); 
}
//OUTPUT
//guvi
//bob
//guvi 23
//bob 24
//__________________________________________________________________________________________________________________________________________


const student=  // [
    {
    "name": "sam",
    "age": 24,
    "gender":"female",
    "marks":80,
    "hobbies":null,
    "ismarried":false,
}
//  { 
//      "name": "abi",
//     "age": 24,
//     "gender":"male",
//      "marks":70,
//     "hobbies":"Reading books",
//     "ismarried": true,

//  },

// ];
//BY USING FOR OF LOOP
//  for(const obj of student){
//     console.log(obj.name)
//  }
//_____________________________________________________________________________________________________________________________
//BY USING FOR IN LOOP

for(const  x in student) { //in here x describes key strudent[x] describes keyvalues
    console.log(x + ": "+ student[x]);
}

//________________________________________________________________________________________________________________________________________

//By using Object.keys
console.log(Object.keys(student)); //Output ['name', 'age', 'gender', 'marks', 'hobbies', 'ismarried']

//_______________________________________________________________________________________________________________________________________

//BY using object.values

console.log(Object.values(student)); //['sam', 24, 'female', 80, null, false]
//____________________________________________________________________________________________________________________________________
//BY using object.entires


console.log(Object.entries(student)); //OUTPUT 
 //['name', 'sam']
 //['age', 24]
// ['gender', 'female']
// ['marks', 80]
// ['hobbies', null]
// ['ismarried', false]


