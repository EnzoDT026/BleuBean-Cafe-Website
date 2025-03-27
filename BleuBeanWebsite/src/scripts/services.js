// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var baristabtn = document.getElementById("BarsitaBtn");
var CoffeBtn = document.getElementById("CoffeBtn");
var franchisebtn = document.getElementById("FranchiseBtn");
var consultationbtn = document.getElementById("Consultationbtn");





// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
baristabtn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("NameOfService").innerText = "Barista Training";
  document.getElementById("Price").innerText = "P2,500";
  document.getElementById("Info").innerText = "Start your journey today and turn your passion for coffee into a career! Join our Intensive 1-Day Barista Training for just P2,500. This program is designed to equip you with the essential skills and knowledge to become a skilled barista or even own a coffee shop";
  document.getElementById("text4franchise").hidden = true;
  document.getElementById("ul1").innerText = "Venue: Bleu Bean Cafe Office (Near Sandiganbayan) Pin: Havmanta Building";
  document.getElementById("ul2").innerText = "Time: 9:00 AM - 05:00 PM";
  document.getElementById("ul3").innerText = "Duration: 1 Day Intensive Training";
  document.getElementById("ul4").innerText = "Inclusions: Training materials, coffee and meal, certificate of completion";
  document.getElementById("ul5").innerText = "Requirements: Down payment of P1,000 is required";
  document.getElementById("ul6").innerText = "Nonrefundable";
  document.getElementById("ul1").hidden = false;
  document.getElementById("ul2").hidden = false;
  document.getElementById("ul3").hidden = false;
  document.getElementById("ul4").hidden = false;
  document.getElementById("ul5").hidden = false;
  document.getElementById("ul6").hidden = false;
  document.getElementById("ul7").hidden = true;
  document.getElementById("ul8").hidden = true;
  document.getElementById("inquire").hidden = false;
  document.getElementById("Contact").hidden = true;
  document.getElementById("txt4coffee").hidden = true;  

    document.getElementById("inquire").onclick = function() {
        this.href = "https://docs.google.com/forms/d/e/1FAIpQLSfJvOX9hE4vj_E1IVz-dN2yw5sAB2kf7XeZYzXalmCpb59-NQ/viewform";
        console.log(this.href);
    };

}
CoffeBtn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("NameOfService").innerText = "Coffe Cart";
    document.getElementById("Price").innerText = "Starts at ​₱5,000";
    document.getElementById("Info").innerText = "We're absolutely thrilled to be a part of your unforgettable event! Let's take your celebration to the next level with our coffee cart. Basic package starts at only P5,000 for 50 pax ";
    document.getElementById("text4franchise").hidden = true;
    document.getElementById("ul1").innerText = "Basic Package Inclusions:";
    document.getElementById("ul2").innerText = "Full Coffee Cart Setup";
    document.getElementById("ul3").innerText = "50 cups";
    document.getElementById("ul4").innerText = "(2) Professional Barista";
    document.getElementById("ul5").innerText = "4 hours of Service";
    document.getElementById("ul6").innerText = "Espresso Machine + Coffee Grinder";
    document.getElementById("ul7").innerText = "Ice Box and Full Cream Milk";
    document.getElementById("ul8").innerText = "Eco-Friendly Cups, Lids & Stirrers";
    document.getElementById("ul1").hidden = false;
    document.getElementById("ul2").hidden = false;
    document.getElementById("ul3").hidden = false;
    document.getElementById("ul4").hidden = false;
    document.getElementById("ul5").hidden = false;
    document.getElementById("ul6").hidden = false;
    document.getElementById("ul7").hidden = false;
    document.getElementById("ul8").hidden = false;
    document.getElementById("inquire").hidden = false;
    document.getElementById("Contact").hidden = true;
    document.getElementById("txt4coffee").hidden = false;  

    document.getElementById("inquire").onclick = function() {
        this.href = "https://docs.google.com/forms/d/e/1FAIpQLSe7C-00seXA_nZE89eibPbVJZQTkyfX5BAQmLrAf450XR3cUQ/viewform";
        console.log(this.href);
    };

}
franchisebtn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("NameOfService").innerText = "Franchise";
    document.getElementById("Info").innerText = "Franchise now with Bleu Bean Cafe Corp and become an owner of your own Coffee Shop. Get our exclusive limited time promo from P249k to only P199k with no hidden fees.";
    document.getElementById("Price").innerText = "Starts at ₱199,000";
    document.getElementById("text4franchise").hidden = false;
    document.getElementById("ul1").hidden = true;
    document.getElementById("ul2").innerText = "No hidden fees like royalty fee, continuing fee, and marketing fee ";
    document.getElementById("ul3").innerText = "Affordable startup cost with high potential returns";
    document.getElementById("ul4").innerText = "Be part of a fast-growing café community";
    document.getElementById("ul2").hidden = false;
    document.getElementById("ul3").hidden = false;
    document.getElementById("ul4").hidden = false;
    document.getElementById("ul5").hidden = true;
    document.getElementById("ul6").hidden = true;
    document.getElementById("ul7").hidden = true;
    document.getElementById("ul8").hidden = true;
    document.getElementById("inquire").hidden = false;
    document.getElementById("Contact").hidden = true;
    document.getElementById("txt4coffee").hidden = true; 

    document.getElementById("inquire").onclick = function() {
        this.href = "https://docs.google.com/forms/d/e/1FAIpQLSc76vilyQqROgJVq4cXp8MufGZ3l9EquHtmoq263F6_yMtdaQ/viewform";
        console.log(this.href);
    };
}
consultationbtn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("NameOfService").innerText = "Coffee Business Consultation";
    document.getElementById("Info").innerText = "Are you ready to take your coffee business to the next level? Whether you’re launching a new café, struggling with operations, or looking to boost profits, a Coffee Business Consultant can be the game-changer you need!";
    document.getElementById("Price").innerText = "Starts at ₱5,000";
    document.getElementById("text4franchise").innerText = "Here are the services that we offer:";
    document.getElementById("ul1").innerText = "Barista Training";
    document.getElementById("ul2").innerText = "Coffee menu and recipe based on target market profile taste";
    document.getElementById("ul3").innerText = "Costing & Pricing";
    document.getElementById("ul4").innerText = "Supplier and best brand recommendation ( Coffee equipment, accessories and ingredients)";
    document.getElementById("ul5").innerText = "Grant opening support";
    document.getElementById("ul6").hidden = false;
    document.getElementById("ul7").hidden = false;
    document.getElementById("ul8").hidden = false;
    document.getElementById("ul6").hidden = true;
    document.getElementById("ul7").hidden = true;
    document.getElementById("ul8").hidden = true;
    document.getElementById("txt4coffee").hidden = true;
    document.getElementById("Contact").hidden = false;
    document.getElementById("inquire").hidden = true;

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