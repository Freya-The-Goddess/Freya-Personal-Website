function loadJS() {
	var messageTextArea = document.getElementById("formMessage");
	messageTextArea.addEventListener("keydown", countChars, false);
	messageTextArea.addEventListener("keyup", countChars, false);
	document.addEventListener('DOMContentLoaded', thankYou(), false);
}

function thankYou() {
	var url = window.location.href;
	if (url.includes("?thankyou")) {
		document.getElementById("thankyou").innerHTML = "Thanks for the message! Freya will get back to you as soon as she can.";
	}
}

function countChars() {
	var charCountElement = document.getElementById("charCount");
	var messageTextArea = document.getElementById("formMessage");
	
	/*insert character count into element*/
	if (messageTextArea.value.length < 10) {
		charCountElement.innerHTML = "&nbsp;&nbsp;"+messageTextArea.value.length.toString(10)+"/500";
	}
	else if (messageTextArea.value.length < 100) {
		charCountElement.innerHTML = "&nbsp;"+messageTextArea.value.length.toString(10)+"/500";
	}
	else if (messageTextArea.value.length >= 100) {
		charCountElement.innerHTML = messageTextArea.value.length.toString(10)+"/500";
	}
	
	/*color character count if close full*/
	if (messageTextArea.value.length < 450) {
		charCountElement.style.color = "#666666";
	} 
	else if (messageTextArea.value.length <490) {
		charCountElement.style.color = "#FFAA00";
	}
	else if (messageTextArea.value.length <500) {
		charCountElement.style.color = "#FF7700";
	}
	else if (messageTextArea.value.length == 500) {
		charCountElement.style.color = "#FF0000";
	}
	
	/*expand textarea as typing*/
	messageTextArea.style.height = 'inherit';
	var computed = window.getComputedStyle(messageTextArea);
	var height	= parseInt(computed.getPropertyValue('border-top-width'), 10)
				+ parseInt(computed.getPropertyValue('padding-top'), 10)
				+ messageTextArea.scrollHeight
				+ parseInt(computed.getPropertyValue('padding-bottom'), 10)
				+ parseInt(computed.getPropertyValue('border-bottom-width'), 10);
	messageTextArea.style.height = height + 'px';
}