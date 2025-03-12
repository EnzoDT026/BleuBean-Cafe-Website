// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var baristabtn = document.getElementById("BarsitaBtn");
var coffeebtn = document.getElementById("CoffeBtn");
var franchisebtn = document.getElementById("FranchiseBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
baristabtn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("NameOfService").innerText = "Barista Training";
  document.getElementById("Price").innerText = "P2,500.00";
  document.getElementById("Info").innerText = "Start your journey today and turn your passion for coffee into a career! Join our Intensive 1-Day Barista Training for just P2,500. This program is designed to equip you with the essential skills and knowledge to become a skilled barista or even own a coffee shop";
  document.getElementById("ul1").innerText = "Venue: Bleu Bean Cafe Office (Near Sandiganbayan) Pin: Havmanta Building";
  document.getElementById("ul2").innerText = "Time: 9:00 AM - 05:00 PM";
  document.getElementById("ul3").innerText = "Duration: 1 Day Intensive Training";
  document.getElementById("ul4").innerText = "Inclusions: Training materials, coffee and meal, certificate of completion";
  document.getElementById("ul5").innerText = "Requirements: Down payment of P1,000 is required";
  document.getElementById("ul6").innerText = "Nonrefundable";
  document.getElementById("ul7").hidden = true;

}
CoffeBtn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("NameOfService").innerText = "Coffe Cart";
    document.getElementById("Info").innerText = "Start your journey today and turn your passion for coffee into a career! Join our Intensive 1-Day Barista Training for just P2,500. This program is designed to equip you with the essential skills and knowledge to become a skilled barista or even own a coffee shop";
    }
FranchiseBtn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("NameOfService").innerText = "Franchise";
    document.getElementById("Info").innerText = "Start your journey today and turn your passion for coffee into a career! Join our Intensive 1-Day Barista Training for just P2,500. This program is designed to equip you with the essential skills and knowledge to become a skilled barista or even own a coffee shop";
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