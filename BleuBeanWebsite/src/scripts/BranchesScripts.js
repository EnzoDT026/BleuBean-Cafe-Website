let outerIndex = 0;
showOuterSlide(outerIndex); // Initialize first outer slide

// Function to Change Outer Slides Manually
function changeSlide(n) {
    showOuterSlide(outerIndex += n);
}

function showOuterSlide(n) {
    let outerSlides = document.getElementsByClassName("mySlidesOuter");
    
    if (n >= outerSlides.length) { outerIndex = 0; }  
    if (n < 0) { outerIndex = outerSlides.length - 1; }  

    for (let slide of outerSlides) {
        slide.style.display = "none";
    }

    outerSlides[outerIndex].style.display = "block";
}

// Inner Carousel (Auto-Rotates Images Inside Active Outer Slide)
function showInnerSlides() {
    let outerSlides = document.getElementsByClassName("mySlidesOuter");

    for (let i = 0; i < outerSlides.length; i++) {
        let innerSlides = outerSlides[i].getElementsByClassName("mySlidesInner");
        let innerIndex = 0;

        function cycleInnerSlides() {
            for (let j = 0; j < innerSlides.length; j++) {
                innerSlides[j].style.display = "none";
            }

            innerIndex = (innerIndex + 1) % innerSlides.length;
            innerSlides[innerIndex].style.display = "flex";

            setTimeout(cycleInnerSlides, 3000); // Inner images change every 2s
        }

        cycleInnerSlides();
    }
}

showInnerSlides(); // Start rotating inner images

// Function to Search Branch
function searchBranch() {
    let input = document.getElementById('searchInput').value.trim().toLowerCase(); // Trim whitespace and convert to lowercase

    if (input === "") {
        // If the input is empty, show an alert and do nothing
        alert("Please enter a branch name to search.");
        return;
    }

    let outerSlides = document.getElementsByClassName("mySlidesOuter");
    let found = false;
    let firstMatchIndex = -1;

    for (let i = 0; i < outerSlides.length; i++) {
        let branchName = outerSlides[i].getElementsByClassName("BranchInfo")[0].innerText.toLowerCase();

        // Check if the branch name includes the search input
        if (branchName.includes(input)) {
            outerSlides[i].style.display = "block"; // Show matching slides
            if (firstMatchIndex === -1) {
                firstMatchIndex = i; // Store the index of the first matching slide
            }
            found = true;
        } else {
            outerSlides[i].style.display = "none"; // Hide non-matching slides
        }
    }

    if (found) {
        // Redirect to the first matching slide
        outerSlides[firstMatchIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        alert("No branches found with the given input.");
    }
}

// Populate the autocomplete options for the search bar
function populateAutocomplete() {
    let outerSlides = document.getElementsByClassName("mySlidesOuter");
    let datalist = document.getElementById("branchNames");
    datalist.innerHTML = ""; // Clear any existing options

    for (let i = 0; i < outerSlides.length; i++) {
        let branchName = outerSlides[i].getElementsByClassName("BranchName")[0].innerText;

        // Create an option element for each branch name
        let option = document.createElement("option");
        option.value = branchName;
        datalist.appendChild(option); // Add the option to the datalist
    }
}

// Ensure autocomplete is always available
document.getElementById("searchInput").addEventListener("input", function () {
    populateAutocomplete(); // Repopulate the datalist as the user types
});

// Call the function to populate the autocomplete options on page load
window.onload = function () {
    populateAutocomplete();
};

// Toggle All Branches Visibility
let allBranchesVisible = false;

function toggleAllBranches() {
    const outerSlides = document.getElementsByClassName("mySlidesOuter");
    const showAllButton = document.getElementById("showAllButton");
    const carouselControls = document.getElementsByClassName("carousel-controls"); // Add a class for the controls

    if (!allBranchesVisible) {
        // Show all branches
        for (let slide of outerSlides) {
            slide.style.display = "block";
        }
        showAllButton.innerText = "Hide All Branches";
        allBranchesVisible = true;

        // Hide carousel controls
        for (let control of carouselControls) {
            control.style.display = "none";
        }

        // Scroll to the first branch
        if (outerSlides.length > 0) {
            outerSlides[0].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    } else {
        // Hide all branches except the first one
        for (let i = 0; i < outerSlides.length; i++) {
            outerSlides[i].style.display = i === 0 ? "block" : "none";
        }
        showAllButton.innerText = "Show All Branches";
        allBranchesVisible = false;

        // Show carousel controls
        for (let control of carouselControls) {
            control.style.display = "block";
        }

        // Scroll to the first branch
        if (outerSlides.length > 0) {
            outerSlides[0].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
}

// Back to Top Button Functionality
window.onscroll = function () {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
