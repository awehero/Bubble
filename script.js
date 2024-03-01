//upgrade stuff
let pops = 0;
let nails = 0;
let darts = 0;
let nailcost = 10;
let dartcost = 100;
updateNailCostElement();
updateDartCostElement();
function updatePopsCounterElement() {
  popsCounter.innerText = pops;
}
function updateUpgradeElements() {
  numberOfNails.innerText = nails;
  numberOfDarts.innerText = darts;
}
//buttons
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
document.getElementById('dartsUpgradeButton').addEventListener('click', function() {
  if (pops >= dartcost)
  {
    pops -= dartcost;
    darts++;
    updatePopsCounterElement();
    updateUpgradeElements();
    dartcost = 100 + (10 * Math.pow(darts, 2));
    updateDartCostElement();
  }
  if (pops < dartcost)
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
//dart money and costs
setInterval(function() {
  pops += 10 * darts;
  updatePopsCounterElement();
}, 1000);
function updateDartCostElement() {
  dartCost.innerText = dartcost;
}
