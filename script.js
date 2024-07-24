function getFormvalue() {
    //Write your code here
	  event.preventDefault();
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  alert(`${firstName} ${lastName}`);

}
