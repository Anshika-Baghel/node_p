//callback function in js

function callback(){
    console.log("Anshika is calling callback function.")
}
//callback function is passed as an argument to another function and is executed after some operations.
const add=function(a,b,callback)  //this is our main function.
{
    var result=a+b;
    console.log('result :'+result);
    callback(); //this is the function which is being called.(callback function) 
}
//add(3,4,callback)

add(2,3,function(){
    console.log('result completed');
})
add(2,3,()=>{console.log('add completed')}) //inline  we normally use this function in normal coding.
