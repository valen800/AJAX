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

      let parametersXML = createXML();
      XMLHttpRequestObject.open('POST','check_data.php', true)
      XMLHttpRequestObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
      XMLHttpRequestObject.send(parametersXML)
      
    if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200 ) {
      processReply(XMLHttpRequestObject)
    }
  }
  }

}

const processReply = (httprequest) => {
  let xml_document = httprequest.responseXML;
  content.innerHTML = xml_document;
}

const createXML = () => {
  let firstname = document.getElementById("firstnameId");
  let lastname = document.getElementById("lastnameId");
  let age = document.getElementById("ageId");

  let xml = "<parametros>"

  xml += "<firstname>" + firstname.value + "<\/firstname>"
  xml += "<lastname>" + lastname.value + "<\/lastname>"
  xml += "<firstname>" + age.value + "<\/firstname>"

  xml += "<\/parametros>"

  return xml;

}

btn.addEventListener('click', btnListener)
/* https://uniwebsidad.com/libros/ajax/capitulo-7/aplicaciones-complejas */