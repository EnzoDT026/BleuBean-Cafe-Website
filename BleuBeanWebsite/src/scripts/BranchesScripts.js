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

            setTimeout(cycleInnerSlides, 5000); // Inner images change every 2s
        }

        cycleInnerSlides();
    }
}

showInnerSlides(); // Start rotating inner images

// Function to Search Branch
function searchBranch() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let outerSlides = document.getElementsByClassName("mySlidesOuter");
    let found = false;

    for (let i = 0; i < outerSlides.length; i++) {
        let branchName = outerSlides[i].getElementsByClassName("BranchName")[0].innerText.toLowerCase();
        if (branchName.includes(input)) {
            outerIndex = i;
            showOuterSlide(outerIndex);
            found = true;
            break;
        }
    }

    if (!found) {
        alert("Branch not found");
    }
}