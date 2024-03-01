//upgrade stuff
let pops = 0;
let nails = 0;
let darts = 0;
let nailcost = 10;
let dartcost = 100;
updateNailCostElement();
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
  if (pops >= nailcost)
  {
    pops -= nailcost;
    nails++;
    updatePopsCounterElement();
    updateUpgradeElements();
    nailcost = 10 + Math.pow(nails, 2);
    updateNailCostElement();
  }
  if (pops < nailcost)
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
//nail money and costs
setInterval(function() {
  pops += nails;
  updatePopsCounterElement();
}, 1000);
function updateNailCostElement() {
  nailCost.innerText = nailcost;
}
