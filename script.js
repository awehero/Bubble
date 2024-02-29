let pops = 0;
let nails = 0;
function updatePopsCounterElement() {
  popsCounter.innerText = pops;
}
function updateUpgradeElements() {
  numberOfNails.innerText = nails;
}
document.getElementById('bubbleButton').addEventListener('click', function() {
  pops++;
  updatePopsCounterElement();
});
document.getElementById('nailsUpgradeButton').addEventListener('click' function() {
  if (pops >= 10)
  {
    pops -= 10;
    nails++;
    updatePopsCounterElement();
    updateUpgradeElements();
  }
};
