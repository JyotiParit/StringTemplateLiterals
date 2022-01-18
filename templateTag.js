//******3-TemplateTag*******/
//*******Example 1***********/
//var strings="Jyoti"
//var values=20
//var newstr=strings.toUpperCase();
//function uppercase(strings, ...values){
// you can now convert the sub strings to uppercase ,
//concatenate them and return an uppercase string 
//of the original 
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
//We are just going to return the set of substrings and evaluated expressions 
//  return `[ ${newstr} ] :  (${values})`;
//}
//console.log(uppercase(newstr ,values));
//*********Example 2********/
//var upperCaseString=  `i want this string to be converted to uppercase`;
//var UpperCase= upperCaseString.toUpperCase();
//console.log(UpperCase);
//**********Example 3*******/
var person = 'Karan';
var age = 28;
function myTag(strings, personExp, ageExp) {
    var str0 = strings[0]; // "That "
    var str1 = strings[1]; // " is a "
    var str2 = strings[2]; // "."
    var ageStr;
    if (ageExp > 99) {
        ageStr = 'centenarian';
    }
    else {
        ageStr = 'youngster';
    }
    // We can even return a string built using a template literal
    return "".concat(str0).concat(personExp).concat(str1).concat(ageStr).concat(str2);
}
var output = myTag(__makeTemplateObject(["That ", " is a ", "."], ["That ", " is a ", "."]), person, age);
console.log(output);
// That Karan is a youngster.
