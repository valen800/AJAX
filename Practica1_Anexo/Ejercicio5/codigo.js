let XMLHttpRequestObject = false

if (window.XMLHttpRequest){
  XMLHttpRequestObject = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  XMLHttpRequestObject = new ActiveXObject('Microsoft.XMLHTTP')
}

const btnXML = document.getElementById("btn");
const content = document.getElementById("content")

const btnListener = () => {

  if(XMLHttpRequestObject) {
    XMLHttpRequestObject.onreadystatechange = function () {

    if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200 ) {
    
    }
  }
    XMLHttpRequestObject.open('GET','', true)
    XMLHttpRequestObject.send()
  }

}

const load = (httprequest) => {
  var responseType = httprequest.responseText;

}

btnXML.addEventListener('click', btnListener)
/* https://uniwebsidad.com/libros/ajax/capitulo-7/aplicaciones-complejas */