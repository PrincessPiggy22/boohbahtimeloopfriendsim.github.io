let done = 0;
function goThruDialouge(id, array) {

  let index = 0;
  document.getElementById(id).textContent = array[0];

  document.addEventListener("click", function() {
  index++;

  if(index < array.length) {

    document.getElementById(id).textContent = array[index];
    done = 0;
    
  }
  if(index == array.length){
    window.location.href = "DomeCar.html";
  }
});
};




// Player Room
// Starting Dialouge
const dialouge1 = ["*Insert Boohbah Screaming as their being murdered noises*" , "That sounded like it's coming from the Dome Car","I should get my key and check it out", " "];
goThruDialouge("roomText", dialouge1);
