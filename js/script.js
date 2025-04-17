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

// let submit = document.getElementById("tbl-submit")
// submit.addEventListener("click", function() {
//     submit_validation();
// })

document.getElementById('message-form').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent page reload
  
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const message = document.getElementById('message').value;
    const gender = document.querySelector('input[name="jk"]:checked').value;
  
    const now = new Date().toString();
  
    const outputBox = document.getElementById('output');
    outputBox.innerHTML = `
      <p><strong>Current time:</strong> ${now}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
  });