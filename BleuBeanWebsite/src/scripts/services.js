// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("NameOfService").innerText = "Barista Training";
  document.getElementById("infoUp").innerText = "Start your journey today and turn your passion for coffee into a career! Join our Intensive 1-Day Barista Training for just P2,500. This program is designed to equip you with the essential skills and knowledge to become a skilled barista or even own a coffee shop";
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