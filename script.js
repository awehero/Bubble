//upgrade stuff
let pops = 0;
let nails = 0;
let darts = 0;
let fingers = 1;
let nailcost = 10;
let dartcost = 100;
let fingercost = 50;
let currentTab = "shop";
const tabShop = document.getElementById("tabShop");
const tabUpgrades = document.getElementById("tabUpgrades");
const tabAchievements = document.getElementById("tabAchievements")
const tabOptions = document.getElementById("tabOptions")
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
    tabOptions.classList.add("hidden");
    shopTab.classList.add("activeTab");
    upgradesTab.classList.remove("activeTab");
    achievementsTab.classList.remove("activeTab");
    optionsTab.classList.remove("activeTab");
  } else {
    if (currentTab == "upgrades") {
    tabShop.classList.add("hidden");
    tabUpgrades.classList.remove("hidden");
    tabAchievements.classList.add("hidden");
    tabOptions.classList.add("hidden");
    shopTab.classList.remove("activeTab");
    upgradesTab.classList.add("activeTab");
    achievementsTab.classList.remove("activeTab");
    optionsTab.classList.remove("activeTab");
    } else {
    if (currentTab == "achievements") {
    tabShop.classList.add("hidden");
    tabUpgrades.classList.add("hidden");
    tabAchievements.classList.remove("hidden");
    tabOptions.classList.add("hidden");
    shopTab.classList.remove("activeTab");
    upgradesTab.classList.remove("activeTab");
    achievementsTab.classList.add("activeTab");
    optionsTab.classList.remove("activeTab");
    } else {
      if (currentTab == "options") {
    tabShop.classList.add("hidden");
    tabUpgrades.classList.add("hidden");
    tabAchievements.classList.add("hidden");
    tabOptions.classList.remove("hidden");
    shopTab.classList.remove("activeTab");
    upgradesTab.classList.remove("activeTab");
    achievementsTab.classList.remove("activeTab");
    optionsTab.classList.add("activeTab");
      }
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
function updateUpgradeCostsElements() {
  updateNailCostElement();
  updateDartCostElement();
  updateFingerCostElement();
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
    nailcost = Math.round(10 + (nails * 1.15));
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
    dartcost = Math.round(100 + (darts * 1.15));
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
    fingercost = Math.round(50 + (fingers * 1.13));
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
//options button
document.getElementById('optionsTab').addEventListener('click', function() {
  currentTab = "options";
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
//### ACHIEVEMENTS ###
const aBox = document.getElementById('achievementDescriptionBox');
const aHoverElements = document.getElementsByClassName('achievement');
Array.from(aHoverElements).forEach(element => {
  element.addEventListener('mouseover', function() {
    aBox.innerText = element.innerText;
    aBox.style.display = 'block';
  });
  element.addEventListener('mouseout', function() {
    aBox.style.display = 'none';
  });
    element.addEventListener('mousemove', function() {
        aBox.style.top = (event.clientY + 10) + 'px';
        aBox.style.left = (event.clientX + 10) + 'px';
    });
});
//number of pops
const achievement1 = document.getElementById("a1");
setInterval(function() {
  if (pops >= 100) {
    achievement1.id = "pops100";
  }
}, 100);
const achievement2 = document.getElementById("a2");
setInterval(function() {
  if (pops >= 1000) {
    achievement2.id = "pops1000";
  }
}, 100);
const achievement3 = document.getElementById("a3");
setInterval(function() {
  if (pops >= 10000) {
    achievement3.id = "pops10000";
  }
}, 100);
//number of nails
const achievement4 = document.getElementById("a4");
setInterval(function() {
  if (nails >= 50) {
    achievement4.id = "nails50";
  }
}, 100);
const achievement5 = document.getElementById("a5");
setInterval(function() {
  if (nails >= 100) {
    achievement5.id = "nails100";
  }
}, 100);
//number of darts
const achievement6 = document.getElementById("a6");
setInterval(function() {
  if (darts >= 50) {
    achievement6.id = "darts50";
  }
}, 100);
const achievement7 = document.getElementById("a7");
setInterval(function() {
  if (darts >= 100) {
    achievement7.id = "darts100";
  }
}, 100);
//number of fingers
const achievement8 = document.getElementById("a8");
setInterval(function() {
  if (fingers >= 50) {
    achievement8.id = "fingers50";
  }
}, 100);
const achievement9 = document.getElementById("a9");
setInterval(function() {
  if (fingers >= 100) {
    achievement9.id = "fingers100";
  }
}, 100);
//number of all
const achievement10 = document.getElementById("a10");
setInterval(function() {
  if (fingers >= 10 && darts >= 10 && nails >= 10) {
    achievement10.id = "all10";
  }
}, 100);
const achievement11 = document.getElementById("a11");
setInterval(function() {
  if (fingers >= 50 && darts >= 50 && nails >= 50) {
    achievement11.id = "all50";
  }
}, 100);
//save code
const savedGameText = document.getElementById("autoSaveText");
setInterval(function() {
  saveGame();
  showSavedGameText();
}, 60000);
function saveGame() {
  const gameState = {
    pops: pops,
    nails: nails,
    darts: darts,
    fingers: fingers,
  };
  const jsonGameState = JSON.stringify(gameState)
  localStorage.setItem('bubblePopGameState', jsonGameState);
}
function loadGame() {
  const jsonGameState = localStorage.getItem('bubblePopGameState');
  if (jsonGameState) {
    const gameState = JSON.parse(jsonGameState);
    pops = gameState.pops;
    nails = gameState.nails;
    darts = gameState.darts;
    fingers = gameState.fingers;
    updatePopsCounterElement();
    updateUpgradeElements();
    updateUpgradeCostsElements();
  }
}
document.getElementById('loadButton').addEventListener('click', function() {
  loadGame();
});
function showSavedGameText() {
savedGameText.classList.remove("hidden");
setTimeout(function() {
  savedGameText.classList.add("hidden");
}, 3000);
}
//### SOUNDS ###
//pop sound
function playPopSound() {
  var popSound = document.getElementById("popSound");
  popSound.play();
}
//### UPGRADES ###
//upgrade text
const uBox = document.getElementById('upgradeDescriptionBox');
const uHoverElements = document.getElementsByClassName('upgradesButton');
Array.from(uHoverElements).forEach(element => {
  element.addEventListener('mouseover', function() {
    uBox.innerText = element.innerText;
    uBox.style.display = 'block';
  });
  element.addEventListener('mouseout', function() {
    uBox.style.display = 'none';
  });
    element.addEventListener('mousemove', function() {
        uBox.style.top = (event.clientY + 10) + 'px';
        uBox.style.left = (event.clientX + 10) + 'px';
    });
});
//upgrade button
function hideUpgradeButton(button) {
  if (button.classList.contains('upgradesButton')) {
    button.style.display = "none";
    button.disabled = true;
  }
}
