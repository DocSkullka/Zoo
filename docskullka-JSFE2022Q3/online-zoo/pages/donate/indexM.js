let parent = document.querySelector(".moneyAll");
let menuItem = parent.querySelectorAll(".money");

var rad1 = document.getElementById("rad1");
var rad2 = document.getElementById("rad2");
var rad3 = document.getElementById("rad3");
var rad4 = document.getElementById("rad4");
var rad5 = document.getElementById("rad5");
var rad6 = document.getElementById("rad6");
var rad7 = document.getElementById("rad7");
var rad8 = document.getElementById("rad8");
var money1 = document.getElementById("money1");
var money2 = document.getElementById("money2");
var money3 = document.getElementById("money3");
var money4 = document.getElementById("money4");
var money5 = document.getElementById("money5");
var money6 = document.getElementById("money6");
var money7 = document.getElementById("money7");
var money8 = document.getElementById("money8");
rad1.addEventListener("click", function () {
  money1.classList.add("activeCh");
  money2.classList.remove("activeCh");
  money3.classList.remove("activeCh");
  money4.classList.remove("activeCh");
  money5.classList.remove("activeCh");
  money6.classList.remove("activeCh");
  money7.classList.remove("activeCh");
  money8.classList.remove("activeCh");
});
rad2.addEventListener("click", function () {
  money1.classList.remove("activeCh");
  money2.classList.add("activeCh");
  money3.classList.remove("activeCh");
  money4.classList.remove("activeCh");
  money5.classList.remove("activeCh");
  money6.classList.remove("activeCh");
  money7.classList.remove("activeCh");
  money8.classList.remove("activeCh");
});
rad3.addEventListener("click", function () {
  money1.classList.remove("activeCh");
  money2.classList.remove("activeCh");
  money3.classList.add("activeCh");
  money4.classList.remove("activeCh");
  money5.classList.remove("activeCh");
  money6.classList.remove("activeCh");
  money7.classList.remove("activeCh");
  money8.classList.remove("activeCh");
});
rad4.addEventListener("click", function () {
  money1.classList.remove("activeCh");
  money2.classList.remove("activeCh");
  money3.classList.remove("activeCh");
  money4.classList.add("activeCh");
  money5.classList.remove("activeCh");
  money6.classList.remove("activeCh");
  money7.classList.remove("activeCh");
  money8.classList.remove("activeCh");
});
rad5.addEventListener("click", function () {
  money1.classList.remove("activeCh");
  money2.classList.remove("activeCh");
  money3.classList.remove("activeCh");
  money4.classList.remove("activeCh");
  money5.classList.add("activeCh");
  money6.classList.remove("activeCh");
  money7.classList.remove("activeCh");
  money8.classList.remove("activeCh");
});
rad6.addEventListener("click", function () {
  money1.classList.remove("activeCh");
  money2.classList.remove("activeCh");
  money3.classList.remove("activeCh");
  money4.classList.remove("activeCh");
  money5.classList.remove("activeCh");
  money6.classList.add("activeCh");
  money7.classList.remove("activeCh");
  money8.classList.remove("activeCh");
});
rad7.addEventListener("click", function () {
  money1.classList.remove("activeCh");
  money2.classList.remove("activeCh");
  money3.classList.remove("activeCh");
  money4.classList.remove("activeCh");
  money5.classList.remove("activeCh");
  money6.classList.remove("activeCh");
  money7.classList.add("activeCh");
  money8.classList.remove("activeCh");
});
rad8.addEventListener("click", function () {
  money1.classList.remove("activeCh");
  money2.classList.remove("activeCh");
  money3.classList.remove("activeCh");
  money4.classList.remove("activeCh");
  money5.classList.remove("activeCh");
  money6.classList.remove("activeCh");
  money7.classList.remove("activeCh");
  money8.classList.add("activeCh");
});

/* ======================================Burger============================================ */
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

/*==================================================================Donate Alert=============================================================================================== */

var text = document.querySelector("#textT");

var rad1 = document.getElementById("rad1");
var rad2 = document.getElementById("rad2");
var rad3 = document.getElementById("rad3");
var rad4 = document.getElementById("rad4");
var rad5 = document.getElementById("rad5");
var rad6 = document.getElementById("rad6");
var rad7 = document.getElementById("rad7");
var rad8 = document.getElementById("rad8");

defaultText = text.value; // значение текстового поля на момент загрузки

rad1.addEventListener("click", function () {
  text.value = 5000;
});
rad2.addEventListener("click", function () {
  text.value = 2000;
});
rad3.addEventListener("click", function () {
  text.value = 1000;
});
rad4.addEventListener("click", function () {
  text.value = 500;
});
rad5.addEventListener("click", function () {
  text.value = 250;
});
rad6.addEventListener("click", function () {
  text.value = 100;
});
rad7.addEventListener("click", function () {
  text.value = 50;
});
rad8.addEventListener("click", function () {
  text.value = 25;
});

var money1 = document.getElementById("money1");
var money2 = document.getElementById("money2");
var money3 = document.getElementById("money3");
var money4 = document.getElementById("money4");
var money5 = document.getElementById("money5");
var money6 = document.getElementById("money6");
var money7 = document.getElementById("money7");
var money8 = document.getElementById("money8");

function changeQ(e) {
  if (text.value == 5000) {
    money1.classList.add("activeCh");
    money2.classList.remove("activeCh");
    money3.classList.remove("activeCh");
    money4.classList.remove("activeCh");
    money5.classList.remove("activeCh");
    money6.classList.remove("activeCh");
    money7.classList.remove("activeCh");
    money8.classList.remove("activeCh");
    rad1.checked = true;
  } else if (text.value == 2000) {
    money1.classList.remove("activeCh");
    money2.classList.add("activeCh");
    money3.classList.remove("activeCh");
    money4.classList.remove("activeCh");
    money5.classList.remove("activeCh");
    money6.classList.remove("activeCh");
    money7.classList.remove("activeCh");
    money8.classList.remove("activeCh");
    rad2.checked = true;
  } else if (text.value == 1000) {
    money1.classList.remove("activeCh");
    money2.classList.remove("activeCh");
    money3.classList.add("activeCh");
    money4.classList.remove("activeCh");
    money5.classList.remove("activeCh");
    money6.classList.remove("activeCh");
    money7.classList.remove("activeCh");
    money8.classList.remove("activeCh");
    rad3.checked = true;
  } else if (text.value == 500) {
    money1.classList.remove("activeCh");
    money2.classList.remove("activeCh");
    money3.classList.remove("activeCh");
    money4.classList.add("activeCh");
    money5.classList.remove("activeCh");
    money6.classList.remove("activeCh");
    money7.classList.remove("activeCh");
    money8.classList.remove("activeCh");
    rad4.checked = true;
  } else if (text.value == 250) {
    money1.classList.remove("activeCh");
    money2.classList.remove("activeCh");
    money3.classList.remove("activeCh");
    money4.classList.remove("activeCh");
    money5.classList.add("activeCh");
    money6.classList.remove("activeCh");
    money7.classList.remove("activeCh");
    money8.classList.remove("activeCh");
    rad5.checked = true;
  } else if (text.value == 100) {
    money1.classList.remove("activeCh");
    money2.classList.remove("activeCh");
    money3.classList.remove("activeCh");
    money4.classList.remove("activeCh");
    money5.classList.remove("activeCh");
    money6.classList.add("activeCh");
    money7.classList.remove("activeCh");
    money8.classList.remove("activeCh");
    rad6.checked = true;
  } else if (text.value == 50) {
    money1.classList.remove("activeCh");
    money2.classList.remove("activeCh");
    money3.classList.remove("activeCh");
    money4.classList.remove("activeCh");
    money5.classList.remove("activeCh");
    money6.classList.remove("activeCh");
    money7.classList.add("activeCh");
    money8.classList.remove("activeCh");
    rad7.checked = true;
  } else if (text.value == 25) {
    money1.classList.remove("activeCh");
    money2.classList.remove("activeCh");
    money3.classList.remove("activeCh");
    money4.classList.remove("activeCh");
    money5.classList.remove("activeCh");
    money6.classList.remove("activeCh");
    money7.classList.remove("activeCh");
    money8.classList.add("activeCh");
    rad8.checked = true;
  } else {
    money1.classList.remove("activeCh");
    money2.classList.remove("activeCh");
    money3.classList.remove("activeCh");
    money4.classList.remove("activeCh");
    money5.classList.remove("activeCh");
    money6.classList.remove("activeCh");
    money7.classList.remove("activeCh");
    money8.classList.remove("activeCh");
    rad1.checked = false;
    rad2.checked = false;
    rad3.checked = false;
    rad4.checked = false;
    rad5.checked = false;
    rad6.checked = false;
    rad7.checked = false;
    rad8.checked = false;
  }
}
