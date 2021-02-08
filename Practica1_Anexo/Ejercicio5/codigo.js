var XMLHttpRequestObject = false;
var data = 'check_data.php';
var content;

var inputName;
var inputLastname;
var inputAge;

window.onload = function () {
  if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
  }

  content = document.getElementById('content');

  inputName = document.getElementById('firstnameId');
  inputLastname = document.getElementById('lastnameId');
  inputAge = document.getElementById('ageId');

  var button = document.getElementById('btnId');
  button.addEventListener('click', getData);
}

function getData() {
  if (XMLHttpRequestObject) {
    XMLHttpRequestObject.open("POST", data);

    var params_xml = createJSON();

    XMLHttpRequestObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    XMLHttpRequestObject.onreadystatechange = function () {
      if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
        content.innerHTML = XMLHttpRequestObject.responseText;
          
      }
    }
    console.log(params_xml);
    XMLHttpRequestObject.send("params="+params_xml);
  }
}

function createJSON() {
  var json = '{ "params" : [' + 
  '{ "name":"' + inputName.value + '", "lastname":"' + inputLastname.value + '", "age":"' + inputAge.value + '" }]}';

  return json;
}

