
document.getElementById('formContato').addEventListener('submit', function(e) {
  e.preventDefault(); 
  document.getElementById('msgSucesso').style.display = 'block';
  this.reset(); 
});
