//$ Jquery way of naming stuff.
//$(...) = what's inside () is the "object" we are messing with
//.read() = the method of Jquery
//.ready(...) = argument/parameter to that method
//function(){} in the method is an IIFE = Immediate invoked function expression
$(document).ready(function(){
  // Alert that document is ready
  console.log("Doc is ready");
  
  $("button").click(function(){   

$("#greetingOutput").text("Hello  " 
                          +$("#fname").val() +"!  How are you today?");

 
  });
});