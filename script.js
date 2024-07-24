document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    alert(`${firstName} ${lastName}`);
  });
});
