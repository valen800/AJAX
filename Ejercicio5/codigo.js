let XMLHttpRequestObject = false

if (window.XMLHttpRequest){
  XMLHttpRequestObject = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  XMLHttpRequestObject = new ActiveXObject('Microsoft.XMLHTTP')
}

/* const btnXML = document.getElementById("btn_xml");
const content = document.getElementById("content") */

const Listener = () => {

  if(XMLHttpRequestObject) {
    XMLHttpRequestObject.onreadystatechange = function () {

    if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200 ) {
      /* loadXML(XMLHttpRequestObject) */
    }
  }
    XMLHttpRequestObject.open('GET','companies.xml', true)
    XMLHttpRequestObject.send()
  }

}

/* const loadXML = (xml) => {
  var xmlDoc = xml.responseXML;
  var company = xmlDoc.getElementsByTagName("company")
  var result = "";

  for (let i = 0; i < company.length; i++) {
    result += company[i].getElementsByTagName("certification")[0].childNodes[0].nodeValue;
    result += company[i].getElementsByTagName("employee")[0].childNodes[0].nodeValue;
    result += company[i].getElementsByTagName("industry")[0].childNodes[0].nodeValue;
    result += company[i].getElementsByTagName("html_url")[0].childNodes[0].nodeValue + "<br>";
  }

  content.innerHTML = result;
}

btnXML.addEventListener('click', btnListener) */
