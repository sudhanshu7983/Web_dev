//Arrays in js
let marks=[97,87,78,85,57];
let marks1=[34,66,77,44,55,66];
let n = marks.length;
let avg=0;
let a=0;
// loops in array 
// for loop
for (let i =0;i<n;i++){
     a =a+marks[i];

}
marks.push(10);//push method
console.log(marks);
avg=a/n;

console.log(avg);
// for off loop
// for(let el of marks){
//     console.log(el);
// }

 //array methods
 //1)push (add to end)
 //2)pop (remove from end and return )
 marks.pop();//pop
 console.log(marks);
 console.log(marks.toString());//toString
 console.log((marks));
  let marks2=marks.concat(marks1);//concat
  console.log(marks2);
 //silce(return piece of array)

 