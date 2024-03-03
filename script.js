//upgrade stuff
let pops = 0;
let nails = 0;
let darts = 0;
let fingers = 1;
let nailcost = 10;
let dartcost = 100;
let fingercost = 275;
let currentTab = "shop";
const tabShop = document.getElementById("tabShop");
const tabUpgrades = document.getElementById("tabUpgrades");
const tabAchievements = document.getElementById("tabAchievements")
updateUpgradeElements();
updateNailCostElement();
updateDartCostElement();
updateFingerCostElement();
updateCurrentTab();
function updateCurrentTab() {
  if (currentTab == "shop") {
    tabShop.classList.remove("hidden")
    tabUpgrades.classList.add("hidden");
    tabAchievements.classList.add("hidden");
    shopTab.classList.add("activeTab")
    upgradesTab.classList.remove("activeTab");
    achievementsTab.classList.remove("activeTab");
  } else {
    if (currentTab == "upgrades") {
    tabShop.classList.add("hidden");
    tabUpgrades.classList.remove("hidden");
    tabAchievements.classList.add("hidden");
    shopTab.classList.remove("activeTab")
    upgradesTab.classList.add("activeTab");
    achievementsTab.classList.remove("activeTab");
    } else {
    if (currentTab == "achievements") {
    tabShop.classList.add("hidden");
    tabUpgrades.classList.add("hidden");
    tabAchievements.classList.remove("hidden");
    shopTab.classList.remove("activeTab")
    upgradesTab.classList.remove("activeTab");
    achievementsTab.classList.add("activeTab");
    }
    }
  }
}
function updatePopsCounterElement() {
  popsCounter.innerText = pops;
}
function updateUpgradeElements() {
  numberOfNails.innerText = nails;
  numberOfDarts.innerText = darts;
  numberOfFingers.innerText = fingers;
}
//### BUTTONS ###
//bubble button
document.getElementById('bubbleButton').addEventListener('click', function() {
  pops += fingers;
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
  } else {
    notEnoughPops();
  }
});
//dart button
document.getElementById('dartsUpgradeButton').addEventListener('click', function() {
  if (pops >= dartcost)
  {
    pops -= dartcost;
    darts++;
    updatePopsCounterElement();
    updateUpgradeElements();
    dartcost = 100 + (10 * Math.pow(darts, 2));
    updateDartCostElement();
  } else {
    notEnoughPops();
  }
});
//finger button
document.getElementById('fingersUpgradeButton').addEventListener('click', function() {
  if (pops >= fingercost)
  {
    pops -= fingercost;
    fingers++;
    updatePopsCounterElement();
    updateUpgradeElements();
    fingercost = Math.round(249 * Math.pow(Math.E, 0.1 * fingers));
    updateFingerCostElement();
  } else {
    notEnoughPops();
  }
});
//shop button
document.getElementById('shopTab').addEventListener('click', function() {
  currentTab = "shop";
  updateCurrentTab();
});
//upgrades button
document.getElementById('upgradesTab').addEventListener('click', function() {
  currentTab = "upgrades";
  updateCurrentTab();
});
//achievements button
document.getElementById('achievementsTab').addEventListener('click', function() {
  currentTab = "achievements";
  updateCurrentTab();
});
//fade text
function notEnoughPops() {
const fadeText = document.getElementById("notEnoughPopsText");
fadeText.classList.remove("hidden");
setTimeout(function() {
  fadeText.classList.add("hidden");
}, 2000);
}
//### MONEY AND COSTS ###
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
//finger costs
function updateFingerCostElement() {
  fingerCost.innerText = fingercost;
}
