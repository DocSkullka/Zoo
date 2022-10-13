let FirstP = document.querySelectorAll(".onePerson");
let SlideLine = document.querySelector(".anketTest");
let count = 0;
let width = SlideLine.offsetWidth;
let widthElem = width / FirstP.length / width;
let stepRange = [];
let inputDistance = document.querySelector(".testimonialsScroll");
let maxStep = +inputDistance.getAttribute("max");
let reLocation = [];
for (let i = 0; i <= maxStep; i++) {
  stepRange.push(i);
  reLocation.push(Math.round(i * widthElem * 10000) / 100);
}
let currentValue;
function changeLocation(value) {
  let findIndex = stepRange.indexOf(+value);
  return SlideLine.style.transform = `translateX(-${reLocation[findIndex]}%)`;
}
inputDistance.addEventListener("input", function () {
  currentValue = inputDistance.value;
  changeLocation(currentValue);
});









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


var burg = document.querySelector(".burgerMen");
var opburg = document.querySelector(".opBurgMen");
var burgX = document.querySelector(".burgX");
var main = document.querySelector(".main");

burg.addEventListener("click", function () {
  opburg.classList.add("_active");
  document.body.classList.add("_lock");
});

burgX.addEventListener("click", function () {
  opburg.classList.remove("_active");
  document.body.classList.remove("_lock");
});

main.addEventListener("click", function () {
  opburg.classList.remove("_active");
  document.body.classList.remove("_lock");
});

// =============================================================imgOpen============================================================================================
var person = document.querySelector(".onePerson");
var person2 = document.querySelector(".twoPerson");
var person3 = document.querySelector(".threePerson");
var person4 = document.querySelector(".fourPerson");
var com = document.querySelector(".comBlock");
var comx = document.querySelector(".comX");

person.addEventListener("click", function () {
  com.classList.add("_active");
  return commetns1()
});
comx.addEventListener("click", function () {
  com.classList.remove("_active");
});

person2.addEventListener("click", function () {
  com.classList.add("_active");
  return commetns2()
});
comx.addEventListener("click", function () {
  com.classList.remove("_active");
});

person3.addEventListener("click", function () {
  com.classList.add("_active");
  // const nu = 3;
  return commetns3();
});
comx.addEventListener("click", function () {
  com.classList.remove("_active");
});

person4.addEventListener("click", function () {
  com.classList.add("_active");
  return commetns4()
});
comx.addEventListener("click", function () {
  com.classList.remove("_active");
});

async function commetns1() {
  const com = "com.json";
  const res = await fetch(com);
  const data = await res.json();
  document.querySelector(".comText").textContent = data[0].text;
  document.querySelector(".comName").textContent = data[0].nameT;
  document.querySelector(".comWhere").textContent = data[0].where;
  // document.querySelector(".comImg") = data.img `/clou2dy-JSFE2022Q3/online-zoo/ONLINE-ZOO/assets/icons/icon--main/onPeson.svg`;
}
// commetns1();

async function commetns2() {
  const com = "com.json";
  const res = await fetch(com);
  const data = await res.json();
  document.querySelector(".comText").textContent = data[2].text;
  document.querySelector(".comName").textContent = data[1].nameT;
  document.querySelector(".comWhere").textContent = data[2].where;
document.querySelector(".comImg") = data.img `/clou2dy-JSFE2022Q3/online-zoo/ONLINE-ZOO/assets/icons/icon--main/onPeson.svg`;
}
// commetns2();
async function commetns3() {
  const com = "com.json";
  const res = await fetch(com);
  const data = await res.json();
  document.querySelector(".comText").textContent = data[3].text;
  document.querySelector(".comName").textContent = data[2].nameT;
  document.querySelector(".comWhere").textContent = data[3].where;
  // document.querySelector(".comImg") = data.img `/clou2dy-JSFE2022Q3/online-zoo/ONLINE-ZOO/assets/icons/icon--main/onPeson.svg`;
}
// commetns3();
async function commetns4() {
  const com = "com.json";
  const res = await fetch(com);
  const data = await res.json();
  document.querySelector(".comText").textContent = data[4].text;
  document.querySelector(".comName").textContent = data[3].nameT;
  document.querySelector(".comWhere").textContent = data[4].where;
  // document.querySelector(".comImg") = data.img `/clou2dy-JSFE2022Q3/online-zoo/ONLINE-ZOO/assets/icons/icon--main/onPeson.svg`;
}
// commetns4();

/*==================================================================Donate Alert=============================================================================================== */

var burg = document.querySelector(".burgerMen");
var opburg = document.querySelector(".opBurgMen");
var burgX = document.querySelector(".burgX");
var main = document.querySelector(".main");
burg.addEventListener("click", function () {
  opburg.classList.add("_active");
  document.body.classList.add("_lock");
});

burgX.addEventListener("click", function () {
  opburg.classList.remove("_active");
  document.body.classList.remove("_lock");
});

main.addEventListener("click", function () {
  opburg.classList.remove("_active");
  document.body.classList.remove("_lock");
});


// =============================================================imgOpen============================================================================================
var person = document.querySelector(".onePerson");
var person2 = document.querySelector(".twoPerson");
var person3 = document.querySelector(".threePerson");
var person4 = document.querySelector(".fourPerson");
var com = document.querySelector(".comBlock");
var comx = document.querySelector(".comX");

person.addEventListener("click", function () {
  com.classList.add("_active");
  return commetns1()
});
comx.addEventListener("click", function () {
  com.classList.remove("_active");
});

person2.addEventListener("click", function () {
  com.classList.add("_active");
  return commetns2()
});
comx.addEventListener("click", function () {
  com.classList.remove("_active");
});

person3.addEventListener("click", function () {
  com.classList.add("_active");
  return commetns3();
});
comx.addEventListener("click", function () {
  com.classList.remove("_active");
});

person4.addEventListener("click", function () {
  com.classList.add("_active");
  return commetns4()
});
comx.addEventListener("click", function () {
  com.classList.remove("_active");
});

async function commetns1() {
  const com = "com.json";
  const res = await fetch(com);
  const data = await res.json();
  document.querySelector(".comText").textContent = data[0].text;
  document.querySelector(".comName").textContent = data[0].nameT;
  document.querySelector(".comWhere").textContent = data[0].where;
  // document.querySelector(".comImg") = data.img `/clou2dy-JSFE2022Q3/online-zoo/ONLINE-ZOO/assets/icons/icon--main/onPeson.svg`;
}
// commetns1();

async function commetns2() {
  const com = "com.json";
  const res = await fetch(com);
  const data = await res.json();
  document.querySelector(".comText").textContent = data[2].text;
  document.querySelector(".comName").textContent = data[1].nameT;
  document.querySelector(".comWhere").textContent = data[2].where;
document.querySelector(".comImg") = data.img `/clou2dy-JSFE2022Q3/online-zoo/ONLINE-ZOO/assets/icons/icon--main/onPeson.svg`;
}
// commetns2();
async function commetns3() {
  const com = "com.json";
  const res = await fetch(com);
  const data = await res.json();
  document.querySelector(".comText").textContent = data[3].text;
  document.querySelector(".comName").textContent = data[2].nameT;
  document.querySelector(".comWhere").textContent = data[3].where;
  // document.querySelector(".comImg") = data.img `/clou2dy-JSFE2022Q3/online-zoo/ONLINE-ZOO/assets/icons/icon--main/onPeson.svg`;
}
// commetns3();
async function commetns4() {
  const com = "com.json";
  const res = await fetch(com);
  const data = await res.json();
  document.querySelector(".comText").textContent = data[4].text;
  document.querySelector(".comName").textContent = data[3].nameT;
  document.querySelector(".comWhere").textContent = data[4].where;
  // document.querySelector(".comImg") = data.img `/clou2dy-JSFE2022Q3/online-zoo/ONLINE-ZOO/assets/icons/icon--main/onPeson.svg`;
}


// Testimonials range




