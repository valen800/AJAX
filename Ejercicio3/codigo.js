let XMLHttpRequestObject = false

if (window.XMLHttpRequest){
  XMLHttpRequestObject = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  XMLHttpRequestObject = new ActiveXObject('Microsoft.XMLHTTP')
}

const content = document.getElementById('content')

const menuListener = () => {
  event.preventDefault()
  console.log(event.currentTarget)

  const image = new Image()

  if(XMLHttpRequestObject) {
    // GET de la imagen que tengo en server.
    // event.currentTarget.id se llama igual que la imagen que quiero.
    XMLHttpRequestObject.open('GET', event.currentTarget.id + '.jpg')
    // Indicamos que no queremos que sea una respuesta string, sino un binario.
    /* MAS INFO: https://javascript.info/xmlhttprequest#response-type */
    XMLHttpRequestObject.responseType = 'blob'

    XMLHttpRequestObject.onreadystatechange = function () {

      if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200 ) {
          
        console.log(XMLHttpRequestObject)
        // Guardando Binary data en una variable.
        const blob = XMLHttpRequestObject.response
        // createObjectURL es una funcion de js
        /* https://developer.mozilla.org/es/docs/Web/API/URL/createObjectURL */
        image.src = window.URL.createObjectURL(blob)

        content.appendChild(image)

      }
    }

    XMLHttpRequestObject.send(null)
  }

}

Array.from(document.querySelectorAll('.menu > li > a')).forEach( menuItem => {
    menuItem.addEventListener('click', menuListener)
})