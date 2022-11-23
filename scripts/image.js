function getImage() {
	var url = window.location.href; /*get URL into variable*/
	
	if (url.includes("?") && url.includes("&")) { /*if url has filename and ref*/
		var filename = url.slice(url.lastIndexOf("?", url.length)+1,url.lastIndexOf("&", url.length));
		var redirectpage = url.slice(url.lastIndexOf("&ref=", url.length)+5,url.length);
		document.getElementById("backLink").innerHTML = '<a href="'+redirectpage+'">&larr; Go back</a>';
	}
	else if (url.includes("?")) { /*if url only has filename (no ref page)*/
		var filename = url.slice(url.lastIndexOf("?", url.length)+1,url.length);
	}
	else {redirect();} /*redirect home if no filename in url*/
	
	var path = "images/" + filename;
	if (url.includes("?") && filename.length != 0) { /*if filename in url*/
		document.title = filename;
		document.getElementById("pageTitle").innerHTML = filename;
		document.getElementById("imageContainer").innerHTML = '<img src="'+path+'" alt="'+filename+'" id="imageTag" onerror="redirect()">'
	}
	else {redirect();} /*redirect home if no filename in url*/
}

function redirect() {
	var redirectpage = "aboutme.html"; /*default ref redirect page*/
	
	var url = window.location.href; /*get URL into variable*/
	if (url.includes("?") && url.includes("&")) { /*if url has ref*/
		var redirectpage = url.slice(url.lastIndexOf("&ref=", url.length)+5,url.length);
	}
	window.location.href = redirectpage;
}