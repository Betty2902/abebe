// var logParagraph = $("#myParagraph");
// console.log(logParagraph); // logs our paragraph
// var logDiv = $(".myDiv");
// console.log(logDiv);// logs the two divs with “myDiv” class name

// console.log($("span"));// returns our <span> element 
// $("div").has("p").css("background-color", "pink");
// // $("p").empty()
// $("p").hide();
// $("p").show();
// console.log($("p").html("betelhem"));
// // console.log($("span").before("<p>"));
// $("#divId").before($("#firstPar"));
// $("#divId").after($("#firstPar"));
// $("#divId").prepend($("#firstPar"));
// $("#divId").append($("#firstPar"));
// $("#divId").append($("<p>bete</p>"));
// $("p").addClass("classOne classTwo");
// $("p").removeClass("classOne");
var inputValue = $("input#firstInput").val();
console.log(inputValue);
// console.log($.isNumeric(inputValue));// prints false
// // $(document).ready(function () {
//   $("ul").parent().css({ border: "2px solid red" });
// // });
// $("li").parents().css({ border: "2px solid red" });



// $(document).ready(function () {
//   $("div").children().css({ border: "2px solid" });
// });



// $("div").find("li").css({ border: "2px solid red" });


// $("span").siblings().css({ border: "4px solid red" });

// $("span").next().css({ border: "4px solid red" });

// $("p").nextAll().css({ border: "4px solid red" });

// //looping using vanella
// var element1 = document.getElementsByTagName("li");
// for (let i = 0; i < element1.length; i++) {
//   var allLi = element1[i];
//   allLi.style.backgroundColor = "pink";
// }

//looping through jquery
$("li").css("background-color", "pink");

$("input").blur(function () {
  $("input").css("background-color", "red");
  alert("This text box has lost its focus");
});



