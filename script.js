// Modal functionality
const termsBtn = document.getElementById('termsBtn');
const termsModal = document.getElementById('termsModal');
const closeBtn = document.getElementById('closeBtn');
const acceptBtn = document.getElementById('acceptBtn');

// Open the modal
termsBtn.onclick = function() {
  termsModal.style.display = "block";
}

// Close the modal when the user clicks on <span> (x)
closeBtn.onclick = function() {
  termsModal.style.display = "none";
}

// Accept terms and close the modal
acceptBtn.onclick = function() {
  alert("You have accepted the terms!");
  termsModal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  if (event.target === termsModal) {
    termsModal.style.display = "none";
  }
}￼Enter
