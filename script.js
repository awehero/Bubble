//upgrade stuff
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
document.getElementById('nailsUpgradeButton').addEventListener('click', function() {
  if (pops >= 10)
  {
    pops -= 10;
    nails++;
    updatePopsCounterElement();
    updateUpgradeElements();
  }
  if (pops < 10)
  {
    notEnoughPops();
  }
});
//fade text
function notEnoughPops() {
const fadeText = document.getElementById("notEnoughPopsText");
fadeText.classList.remove("hidden");
setTimeout(function() {
  fadeText.classList.add("hidden");
}, 2000);
}
//nail money
while (1 = 1)
{
  setTimeout(function() {
    pops++;
  }, 1000);
}
