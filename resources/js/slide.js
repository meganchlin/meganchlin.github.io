var slideIndex1 = 1;
var slideIndex2 = 1;

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("Slides1");
  if (n > x.length) {slideIndex1 = 1} 
  if (n < 1) {slideIndex1 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex1-1].style.display = "block"; 
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("Slides2");
  if (n > x.length) {slideIndex2 = 1} 
  if (n < 1) {slideIndex2 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex2-1].style.display = "block"; 
}