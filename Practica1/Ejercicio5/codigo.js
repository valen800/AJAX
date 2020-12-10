let XMLHttpRequestObject = false

if (window.XMLHttpRequest){
  XMLHttpRequestObject = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  XMLHttpRequestObject = new ActiveXObject('Microsoft.XMLHTTP')
}

const btn = document.getElementById("btn_js");

const Listener = () => {

  if(XMLHttpRequestObject) {
    XMLHttpRequestObject.onreadystatechange = function () {

    if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200 ) {
      loadJS(XMLHttpRequestObject)
      console.log(XMLHttpRequestObject.responseText)
    }
  }
    XMLHttpRequestObject.open('GET','codigo2.js', true)
    XMLHttpRequestObject.send()
  }

}

  const loadJS = (httpRequest) => {
    //Eval ejecuta codigo js
  return eval(httpRequest.responseText);
  
}
///////////////////////////////////////
btn.addEventListener('click', Listener)
