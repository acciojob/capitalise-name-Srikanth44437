//your JS code here. If required.
function capitalizeName()
{
	var inputField = document.getElementById("fname");
	inputField.addEventListener("blur", function() {
		
		inputField.value = inputField.value.toUpperCase();
	});
}
capitalizeName();