function getFormvalue() {
    //Write your code here
	event.preventDefault();
	var form = document.getElementById("form1");
	var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;
	alert(firstName + " " + lastName);

}
