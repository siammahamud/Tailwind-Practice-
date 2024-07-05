//    const sum = (a,b,...rest) => {
//         let total = a + b;
//         for(let sum of rest){
//             total += sum;
//         };
//       return total;
//    };
//    const result = sum(1,4,5,7,3,8,3,9,100);
//    console.log(result);
//  const sum = (a,b,c,...rest) => {
//     let total = a + b + c;
//     for(let sum of rest){
//         total += sum;
//     };
//     return total;

//  };
//  const result = sum(3,5,2.8767,354 ,465,456,234,545);
//  console.log(result);
// const person = {
//     firstName: "Siam",
//     lastName: "Mahamud",
//     age: 21,
//     city:"Panchagarh",
//     fullName: function(){
//         return `${this.firstName} ${this.lastName} ${"is"}  ${this.age}   ${ "years old"}`
//     }
// };
// const person1 = {
//     firstName: "Al",
//     lastName: "Imran",
//     age: 23,

// };
// let fullName = person.fullName.bind(person1);
// console.log(fullName());

// for(let i = 1;i<=100;i++){
//     if (i%3==0 && i%5==0){
//         console.log("FizzBuzz" );

//     }else if (i%3==0) {
//         console.log("Fizz");

//     } else if(i%5==0){
//         console.log("Buzz");

//     }else {
//         console.log(i);
//     }

//*************VOWEL COUNTER IN A GIVEN STRING */********** */

// const vowelcounter = (str) => {
//   const vowels = "AEIOUaeiou";
//   let counter = 0;
//   for(let char of str){
//     if(vowels.includes(char)){
//       counter ++;
//     }
//   }
//   return counter;

// }
// const result = vowelcounter("toamauy ami chini bnahh abar vbannnarnafafasndsasdfkafia;ljdfjifeaieioumnfsaaounerooajfjasfio");
// console.log(result);
/* FIND MAX NUMBER FROM AN ARRAY **********/
// const numbers = [23,42,45,41,45,855,5,54,547,787,8778];
// const findmaxnumber = (number) => {
//   let max = numbers[0];
//   for(let i=0;i < numbers.length;i++){
//     if(numbers[i] > max){
//       max = numbers[i];
//     }
//   }return max;
// }
// const result = findmaxnumber(numbers);
// console.log(result);
/**********SUM OF THE NUMBERS OF AN ARRAY *****************/
// const findmaxnumber = (number)=>{
//   let max = numbers[0];
//    for(let i=0;i<=numbers.length;i++){
//     if(numbers[i] > max){
//         max = numbers[i];
//     }
//    }return max;
// };
// const result = findmaxnumber(numbers);
// console.log(result);
///**************************REVERSE AN STRING******************** */

// const reverseanstr = (str) => {
//   let restr = "";
//   for (i= str.length-1;i>=0;i--){
//     restr += str[i];
//   }return restr;
// };
// const result = reverseanstr("ABCDEFGH ");
// console.log(result);

/*((((((((((((((((((((((((((((( REMOVE DUPLICATES FROM AN ARRAY ))))))))))))))))))))))))))))) */

//  const array = [10,12,15,14,20,10,14,15,20,2,20,13,15,14,89];
// const removeduplicates = (arr) => {
//  let uniquearray = [];
//  arr.forEach(element => {
//  if(!uniquearray.includes(element)){
//   uniquearray.push(element);
//  } 
//  }); return uniquearray

// };
// const result = removeduplicates(array);
// console.log(result);



// const input = 13;
// const fact = (num) => {
//     let multiplication = 1;
//     for(let i=num;i>0;i--){
//         multiplication*=i;
//     }return multiplication;
// };
// const result = fact (input);
// console.log(result);

const palindrome = (str) => {
    const cleanedstr = str.replace(/[^A-Za-z0-9]/g ,"").toLowerCase();
    return cleanedstr === cleanedstr.split('').reverse().join('');

};
const result = palindrome("12546");
console.log(result);

