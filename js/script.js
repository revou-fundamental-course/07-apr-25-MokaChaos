let slideIndex = 0;
showSlides();
// changeName();

function changeName() {
    var username = prompt("Hi, what's your name?", "");
    if (username) {
        document.getElementById("username").innerHTML = username;
    }
}

let button = document.getElementById("tombol");
button.addEventListener("click", function() {
    changeName();
})

function showSlides(){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let submit = document.getElementById("tbl-submit")
submit.addEventListener("click", function() {
    submit_validation();
})

function submit_validation(){
    const name = document.getElementById("name").value;
    console.log("Name:", name);

    if(name == "") {
        alert("please enter your name");
    } else {
        alert("form submitted successfully");
    }
}