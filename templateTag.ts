//******3-TemplateTag*******/
//*******Example 1***********/
//var strings="Jyoti"
//var values=20
//var newstr=strings.toUpperCase();
//function uppercase(strings, ...values){
   // you can now convert the sub strings to uppercase ,
    //concatenate them and return an uppercase string 
    //of the original 
    
   //We are just going to return the set of substrings and evaluated expressions 
  //  return `[ ${newstr} ] :  (${values})`;
//}
//console.log(uppercase(newstr ,values));

//*********Example 2********/
//var upperCaseString=  `i want this string to be converted to uppercase`;
//var UpperCase= upperCaseString.toUpperCase();
//console.log(UpperCase);

//**********Example 3*******/
let person = 'Karan';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;

console.log(output);
// That Karan is a youngster.