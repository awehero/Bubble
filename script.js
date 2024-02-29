let pops = 0;
function updatePopsCounter() {
  popsCounter.innerText = pops;
}
document.getElementById('myButton').addEventListener('click', function() {
  pops++;
});
