let pops = 0;
let nails = 0;
function updatePopsCounter() {
  popsCounter.innerText = pops;
  
}
document.getElementById('bubbleButton').addEventListener('click', function() {
  pops++;
  updatePopsCounter();
});
