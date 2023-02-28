var textarea = document.getElementById("note")
var cacheVal = localStorage.getItem('EasyNote')
textarea.value = cacheVal

textarea.addEventListener('input', function (val) {
  var val = textarea.value
  localStorage.setItem('EasyNote', val)
})