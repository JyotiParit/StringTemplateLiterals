//********1-StringInterpolation********/

//var tableName="strInterpolation"
//function buildSqlQuery(tableName):string
//{
//    let query = "select * from " + tableName ;   
//    return query;
//}
//console.log(buildSqlQuery(tableName));

//******OR wtrite above program by using string template*******/
var tableName="StrInterpolation"
function buildSqlQuery(tableName):string
{
    let query = `select * from ${tableName}`   
    return query;
}
console.log(buildSqlQuery(tableName));

//****Example*********/
//let a = 5;
//let b = 10;
//console.log(`Fifteen is ${a + b} and
//not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
