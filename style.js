 var modal = document.getElementById('login-modal');

 var btn = document.getElementById('log-in');

 var span = document.getElementsByClassName('close')[0];

console.log(modal);
console.log(btn);
console.log(span);

 btn.onclick = function() {
  modal.style.display = 'block';
 }

 span.onclick = function() {
  modal.style.display = 'none';
 }

 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
 }