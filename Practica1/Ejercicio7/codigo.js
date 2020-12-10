let XMLHttpRequestObject = false

if (window.XMLHttpRequest){
  XMLHttpRequestObject = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  XMLHttpRequestObject = new ActiveXObject('Microsoft.XMLHTTP')
}

const btn = document.getElementById("btn_php");
const content = document.getElementById("content")

const Listener = () => {

  if(XMLHttpRequestObject) {
    XMLHttpRequestObject.onreadystatechange = function () {

    if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200 ) {
      content.innerHTML = XMLHttpRequestObject.responseText
    }
  }
    XMLHttpRequestObject.open('GET','info.php', true)
    XMLHttpRequestObject.send()
  }

}

///////////////////////////////////////
btn.addEventListener('click', Listener)
