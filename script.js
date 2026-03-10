

// SET UP
// function to be able to click thru dialouge
function goThruDialouge(id, array) {

  let index = 0;
  document.getElementById(id).textContent = array[0];

  document.addEventListener("click", function() {
  index++;

  if(index < array.length) {

    document.getElementById(id).textContent = array[index];
    
  }
});
};

const inventory = [];

// Start Button
document.getElementById("start").onclick = function() {

  window.location.href = "rooms/intro.html";

};

// Player Room
// Starting Dialouge
const dialouge1 = ["*Insert Boohbah Screaming as their being murdered noises*" , "That sounded like it's coming from the Dome Car","I should get my key and check it out", " "];
goThruDialouge("roomText", dialouge1);

const noKeyDialouge = ["I need to unlock the door", ""];
const gotKeyDialouge = ["I have the key", "I can unlock the door now", ""];
const yesKeyDialouge = ["Unlocked", ""];

document.getElementById("key").onclick = function() {
  inventory.push("key");
  goThruDialouge("roomText", gotKeyDialouge);

};

document.getElementById("door").onclick = function() {
  if(inventory.includes("key")) {
    goThruDialouge("roomText", yesKeyDialouge);
    window.location.href = "DomeCar.html";
  } else {
    goThruDialouge("roomText", noKeyDialouge);
  }
};


// if key not in inventory --> don't open door 










