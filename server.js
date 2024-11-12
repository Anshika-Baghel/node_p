// functions in javascript can be written in many ways
//typre 1

function add(a,b)
{
    return a+b;
}
var result=add(2,3);
console.log(result);

//type 2
var add=function(a,b)
{
    return a+b;
}
var result=add(2,7)
console.log(result);

//type 3 arrow function

var add=(a,b)=>{
    return a+b;
}
var result=add(8,9);
console.log(result);
//type 4
var add=(a,b)=>a+b;
var result=add(8,5);
console.log(result);
(function(){// type 5 
    console.log('Anshika');
})();  //() -> this bracket implies function call .If we would have not included this thefunction //will not be executed.

