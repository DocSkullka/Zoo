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


// Slide.....

const sliderLine = document.querySelector('.slidePlace');
const leftArrow = document.querySelector('.leftArrr');
const rightArrow = document.querySelector('.leftArrr2');
const leftItem = document.querySelector('#itemLeft').innerHTML
const rightItem = document.querySelector('#itemRight').innerHTML

const one = document.querySelector('#left1').innerHTML
const two = document.querySelector('#left2').innerHTML
const three = document.querySelector('#left3').innerHTML
const four = document.querySelector('#left4').innerHTML
const five = document.querySelector('#left5').innerHTML
const six = document.querySelector('#left6').innerHTML

let arrayOneSix = [one, two, three, four, five, six]

function shuffle(arrayForSlots) {
  let currentIndex = arrayForSlots.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arrayForSlots[currentIndex], arrayForSlots[randomIndex]] = [
      arrayForSlots[randomIndex], arrayForSlots[currentIndex]];
  }

  return arrayForSlots;
}

const funcLeft = function() {
  sliderLine.classList.add('transitionLeft')

  shuffle(arrayOneSix)

  document.querySelector('#left1').innerHTML = arrayOneSix[0]
  document.querySelector('#left2').innerHTML = arrayOneSix[1]
  document.querySelector('#left3').innerHTML = arrayOneSix[2]
  document.querySelector('#left4').innerHTML = arrayOneSix[3]
  document.querySelector('#left5').innerHTML = arrayOneSix[4]
  document.querySelector('#left6').innerHTML = arrayOneSix[5]
  leftArrow.removeEventListener('click', funcLeft)
  rightArrow.removeEventListener('click', funcRight)

}

const funcRight = function() {
  sliderLine.classList.add('transitionRight')

  shuffle(arrayOneSix)

  document.querySelector('#right1').innerHTML = arrayOneSix[0]
  document.querySelector('#right2').innerHTML = arrayOneSix[1]
  document.querySelector('#right3').innerHTML = arrayOneSix[2]
  document.querySelector('#right4').innerHTML = arrayOneSix[3]
  document.querySelector('#right5').innerHTML = arrayOneSix[4]
  document.querySelector('#right6').innerHTML = arrayOneSix[5]
  rightArrow.removeEventListener('click', funcRight)
  leftArrow.removeEventListener('click', funcLeft)

}

leftArrow.addEventListener('click', funcLeft)


rightArrow.addEventListener('click', funcRight)


sliderLine.addEventListener('animationend', function(animationEvent){
  if(animationEvent.animationName === 'slideLeft') {
    sliderLine.classList.remove('transitionLeft')
    document.querySelector('#center1').innerHTML = document.querySelector('#left1').innerHTML
    document.querySelector('#center2').innerHTML = document.querySelector('#left2').innerHTML
    document.querySelector('#center3').innerHTML = document.querySelector('#left3').innerHTML
    document.querySelector('#center4').innerHTML = document.querySelector('#left4').innerHTML
    document.querySelector('#center5').innerHTML = document.querySelector('#left5').innerHTML
    document.querySelector('#center6').innerHTML = document.querySelector('#left6').innerHTML 
  } else {
    document.querySelector('#center1').innerHTML = document.querySelector('#right1').innerHTML
    document.querySelector('#center2').innerHTML = document.querySelector('#right2').innerHTML
    document.querySelector('#center3').innerHTML = document.querySelector('#right3').innerHTML
    document.querySelector('#center4').innerHTML = document.querySelector('#right4').innerHTML
    document.querySelector('#center5').innerHTML = document.querySelector('#right5').innerHTML
    document.querySelector('#center6').innerHTML = document.querySelector('#right6').innerHTML

    sliderLine.classList.remove('transitionRight')
  }
  leftArrow.addEventListener('click', funcLeft)
  rightArrow.addEventListener('click', funcRight)
})







