var XMLHttpRequestObject = false;

window.onload = function() {
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();  
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    document.getElementById("change_Image").addEventListener("click", function() {
        changeImage('img2.jpg','img')
    })
}

function loadHTMLDoc(file, idContent) {

    xmlHttpRequesObject.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(idContent).innerHTML = this.responseURL;
        }
    }
    xmlHttpRequesObject.open("GET", file, true);
    xmlHttpRequesObject.send();
}