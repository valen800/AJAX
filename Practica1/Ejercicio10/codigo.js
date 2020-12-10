let XMLHttpRequestObject = false

if (window.XMLHttpRequest){
  XMLHttpRequestObject = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  XMLHttpRequestObject = new ActiveXObject('Microsoft.XMLHTTP')
}

const btn = document.getElementById("btn");
const content = document.getElementById("content")
const loadingIMG = document.getElementById("loadingIMG")

loadingIMG.style.display = "none";

const btnListener = () => {

  if(XMLHttpRequestObject) {
    XMLHttpRequestObject.onreadystatechange = function () {

    if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200 ) {
      loadDocs(XMLHttpRequestObject)
      console.log(XMLHttpRequestObject);
    }
  }
    /* XMLHttpRequestObject.open('GET','tenor.gif', true) */
    XMLHttpRequestObject.open('GET','info.php', true)
    XMLHttpRequestObject.send()
  }

}

const loadDocs = (httpRequest) => {
  var phpDoc = httpRequest.responseText;

  loadingIMG.style.display = "block"
  setTimeout(function() {
    content.innerHTML = phpDoc;
  }, 5000)
}

btn.addEventListener('click', btnListener)
