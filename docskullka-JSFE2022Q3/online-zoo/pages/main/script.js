var element = document.querySelector(".nameArr");
element.addEventListener("click", function() {
    element.classList.add("active");
    elem.classList.remove("active");
    setTimeout (function() {
        element.classList.remove("active");
      }, 500);
  });
  var elem = document.querySelector(".nameArrTwo");
  elem.addEventListener("click", function() {
    elem.classList.add("active");
    element.classList.remove("active");
    setTimeout (function() {
        elem.classList.remove("active");
      }, 500);
    });




    var slaidjob1 = document.getElementById("slaidjob1");
    var textjob1 = document.getElementById("textjob1");
    var slaid = document.querySelector(".petLeftSlaidTop");
    slaid.addEventListener("mouseover", function() {
      textjob1.classList.add("allactive"); 
      slaidjob1.classList.add("topactive");
  });
    slaid.addEventListener("mouseout", function() {
      textjob1.classList.remove("allactive"); 
      slaidjob1.classList.remove("topactive");
  });
 
  var slaidjob2 = document.getElementById("slaidjob2");
  var textjob2 = document.getElementById("textjob2");
  var slaid = document.querySelector(".petCenterSlaidTop");
  slaid.addEventListener("mouseover", function() {
    textjob2.classList.add("allactive"); 
    slaidjob2.classList.add("topactive");
});
  slaid.addEventListener("mouseout", function() {
    textjob2.classList.remove("allactive"); 
    slaidjob2.classList.remove("topactive");
});


var slaidjob3 = document.getElementById("slaidjob3");
var textjob3 = document.getElementById("textjob3");
var slaid = document.querySelector(".petRightSlaidTop");
slaid.addEventListener("mouseover", function() {
  textjob3.classList.add("allactive"); 
  slaidjob3.classList.add("topactive");
});
slaid.addEventListener("mouseout", function() {
  textjob3.classList.remove("allactive"); 
  slaidjob3.classList.remove("topactive");
});

var slaidjob4 = document.getElementById("slaidjob4");
var textjob4 = document.getElementById("textjob4");
var slaid = document.querySelector(".petLeftSlaidBottom");
slaid.addEventListener("mouseover", function() {
  textjob4.classList.add("allactive"); 
  slaidjob4.classList.add("topactive");
});
slaid.addEventListener("mouseout", function() {
  textjob4.classList.remove("allactive"); 
  slaidjob4.classList.remove("topactive");
});

var slaidjob5 = document.getElementById("slaidjob5");
var textjob5 = document.getElementById("textjob5");
var slaid = document.querySelector(".petCenterSlaidBottom");
slaid.addEventListener("mouseover", function() {
  textjob5.classList.add("allactive"); 
  slaidjob5.classList.add("topactive");
});
slaid.addEventListener("mouseout", function() {
  textjob5.classList.remove("allactive"); 
  slaidjob5.classList.remove("topactive");
});

var slaidjob6 = document.getElementById("slaidjob6");
var textjob6 = document.getElementById("textjob6");
var slaid = document.querySelector(".petRightSlaidBottom");
slaid.addEventListener("mouseover", function() {
  textjob6.classList.add("allactive"); 
  slaidjob6.classList.add("topactive");
});
slaid.addEventListener("mouseout", function() {
  textjob6.classList.remove("allactive"); 
  slaidjob6.classList.remove("topactive");
});





