let XMLHttpRequestObject = false

if (window.XMLHttpRequest){
  XMLHttpRequestObject = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  XMLHttpRequestObject = new ActiveXObject('Microsoft.XMLHTTP')
}

const btnXML = document.getElementById("btn_json");
const content = document.getElementById("content")

const btnListener = () => {

  if(XMLHttpRequestObject) {
    XMLHttpRequestObject.onreadystatechange = function () {

    if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200 ) {
      loadJSON(XMLHttpRequestObject)
      /* console.log(XMLHttpRequestObject); */
    }
  }
    XMLHttpRequestObject.open('GET','file.json', true)
    XMLHttpRequestObject.send()
  }

}

const loadJSON = (json) => {
  var jsonDoc = json.responseText;
  var data = JSON.parse(jsonDoc);

  console.log(data);

  data.forEach(element => {
    content.innerHTML +=  element.color + ": " + element.value;
  });

}

btnXML.addEventListener('click', btnListener)
