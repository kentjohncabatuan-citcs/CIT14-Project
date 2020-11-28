function toogle() {
  var x = document.getElementById("topnavLinks");
  var y =document.getElementById("container-coupon");

  //mobile view
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }


  //show coupon
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//qty
  var resultCounter = 1;
  function qtyAdd(){
     document.getElementById("qtyResult").value=resultCounter++;
  }
  function qtyReduce(){
     if(resultCounter > 0){
         document.getElementById("qtyResult").value=resultCounter--;
     }
     else{
        document.getElementById("qtyResult").value=0;
     }
  }


//slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusSlides(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

setInterval(function() {
  var x = document.getElementsByClassName("mySlides");
  index++;
  if( self.index == self.slides.length ) {
    index = 0;
  }
  currentSlide( index );
}, 2000);

//current date for footer
var current_year = new Date();
document.getElementById("current-year").innerHTML=current_year.getFullYear();