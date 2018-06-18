 var modal = document.getElementById('login-modal');

 var btn = document.getElementById('log-in');

 var span = document.getElementsByClassName('close')[0];

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

function move() {
  var elem = document.getElementById("card-progress");   
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      document.getElementById("card-counter").className;
    } else {
      width++; 
      elem.style.width = width + '%'; 
      var num = width * 1 / 10;
      num = num.toFixed(0)
      document.getElementById("cards-done").innerHTML = num;
    }
  }
}