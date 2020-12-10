var XMLHttpRequestObject = false;

window.onload = function() {
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();  
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    document.getElementById("btn").addEventListener("click", function() {
        sacardatos('datos.txt','contenedor')
    })
}

function sacardatos(datos, idDiv) {
    if (XMLHttpRequestObject) {
        var objeto = document.getElementById(idDiv);
        XMLHttpRequestObject.open("GET",datos);
        XMLHttpRequestObject.onreadystatechange = function() {
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                objeto.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
    XMLHttpRequestObject.send("null");
    }
}