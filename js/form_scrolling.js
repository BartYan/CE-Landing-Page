window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.querySelector('.form').style.right = "-450px";
    document.querySelector('.form_button').style.right = "0";
  } else {
    document.querySelector('.form').style.right = "0";
    document.querySelector('.form_button').style.right = "-150px";
  }
}
