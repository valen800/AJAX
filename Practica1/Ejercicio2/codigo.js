var xmlHttpRequesObject;

window.onload = function() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlHttpRequesObject = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlHttpRequesObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    document.getElementById("link_benvinguts").addEventListener("click", function() {
        loadHTMLDoc("benvinguts.html", "content")
    })

    document.getElementById("link_google").addEventListener("click", function() {
        loadHTMLDoc("google.html", "content")
    })
}

function loadHTMLDoc(file, idContent) {
    xmlHttpRequesObject.open("GET", file, true);

    xmlHttpRequesObject.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(idContent).innerHTML = this.responseText;
        }
    }
    xmlHttpRequesObject.send();
}