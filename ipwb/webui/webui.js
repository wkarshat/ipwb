var uris = []

function handleSubmit () {
  document.location += document.getElementById('url').value
}

function showURIs () {
  var ul = document.getElementById('uriList')

  if (ul.childNodes.length > 0) {
    return // Prevent multiple adds of the URI list to the DOM
  }
  for (var i = 0; i < uris.length; i++) {
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.href = uris[i]
    a.appendChild(document.createTextNode(uris[i]))

    li.appendChild(a)
    ul.appendChild(li)
  }
  document.getElementById('memCountListLink').classList = ['activated']
}

function addEventListeners () {
  var target = document.getElementById('memCountListLink')
  target.addEventListener('click', showURIs, false)
}
