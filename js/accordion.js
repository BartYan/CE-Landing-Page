var acc = document.getElementsByClassName("accordion");

var img = document.getElementById("arrowone");
var imgTwo = document.getElementById("arrowtwo");
var accc = document.getElementById("accordionOne");
var acccc = document.getElementById("accordionTwo");
var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        swap = false
        } else {
          panel.style.display = "block";
        }
      });
    }

var yo = false
function swap() {
  if(yo === false){
    img.src = "img/arrowUp.svg";
    yo = true
  }
  else if (yo === true) {
    img.src = "img/arrowDown.svg";
    yo = false
  }
};

accc.addEventListener("click", swap);

var yu = false
function swapTwo() {
  if(yu === false){
    imgTwo.src = "img/arrowUp.svg";
    yu = true
  }
  else if (yu === true) {
    imgTwo.src = "img/arrowDown.svg";
    yu = false
  }
};

acccc.addEventListener("click", swapTwo);
