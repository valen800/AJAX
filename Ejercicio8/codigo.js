let XMLHttpRequestObject = false

if (window.XMLHttpRequest){
  XMLHttpRequestObject = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  XMLHttpRequestObject = new ActiveXObject('Microsoft.XMLHTTP')
}

const btn = document.getElementById("btn_css");
const css = document.getElementById("css");

const Listener = () => {

  if(XMLHttpRequestObject) {
    XMLHttpRequestObject.onreadystatechange = function () {

    if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200 ) {
      console.log(XMLHttpRequestObject.responseURL);
      css.href = XMLHttpRequestObject.responseURL;
    }
  }
    XMLHttpRequestObject.open('GET','styles2.css', true)
    XMLHttpRequestObject.send()
  }

}

///////////////////////////////////////
btn.addEventListener('click', Listener)
