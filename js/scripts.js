$(document).ready(function(){
  var subject = prompt("Do you want to learn more about turtles, snakes or insects?");

  if (subject === "turtles") {
    $('#turtles').show();
  } else if (subject === "snakes"){
    $('#snakes').show();
  } else if (subject === "insects"){
    $('#insects').show();
  }else {
    alert("please choose from the following options: turtles, snakes, or insects.")
  }

  })
