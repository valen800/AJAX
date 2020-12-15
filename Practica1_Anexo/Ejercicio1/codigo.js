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
      load(XMLHttpRequestObject)
    }
  }
    XMLHttpRequestObject.open('POST','info.php', true)
    XMLHttpRequestObject.send()
  }

}

const load = (httprequest) => {
  var response = httprequest.responseText;
  content.innerHTML = response;

}

btnXML.addEventListener('click', btnListener)
