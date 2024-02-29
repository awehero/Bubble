let pops = 0;
let nails = 0;
function updatePopsCounterElement() {
  popsCounter.innerText = pops;
}
function updateUpgradeEements() {
  numberOfNails.innerText = nails;
}
document.getElementById('bubbleButton').addEventListener('click', function() {
  pops++;
  updatePopsCounterElement();
});
