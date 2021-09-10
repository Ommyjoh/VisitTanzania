var slideIndex1 = 0;
showSlidess();
function showSlidess() {
var i;
var slides1 = document.getElementsByClassName("comment1");
var dots1 = document.getElementsByClassName("dot1");
for (i = 0; i < slides1.length; i++) {
 slides1[i].style.display = "none";  
}
slideIndex1++;
if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
for (i = 0; i < dots1.length; i++) {
dots1[i].className = dots1[i].className.replace(" active1", "");
}
slides1[slideIndex1-1].style.display = "block";  
dots1[slideIndex1-1].className += " active1";
setTimeout(showSlidess, 5000); // Change image every 8 seconds
}