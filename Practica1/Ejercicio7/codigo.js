let XMLHttpRequestObject = false

if (window.XMLHttpRequest){
  XMLHttpRequestObject = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  XMLHttpRequestObject = new ActiveXObject('Microsoft.XMLHTTP')
}

const btnSubmit = document.getElementById("btnSubmit")
const inputEmail = document.getElementById("emailId")
const content = document.getElementById("content")

const Listener = (url) => {

  if(XMLHttpRequestObject) {
    XMLHttpRequestObject.onreadystatechange = function () {

    if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200 ) {
      content.innerHTML = XMLHttpRequestObject.responseText
    }
  }
    console.log(url);
    XMLHttpRequestObject.open("GET", url , true)
    XMLHttpRequestObject.send()
  }

}

const checkSubmit = (event) => {
  let emailValue = inputEmail.value
  let urlValue = "info.php" + "?" + "email=" + emailValue;

  if (emailValue == "" || emailValue == null) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  } else {
    Listener(urlValue);
  }
}

//////
btnSubmit.addEventListener("click", event => {
  checkSubmit(event);
})