function undoStrike(neededItems){
    if(neededItems.className == 'got'){
      neededItems.className = 'need';
    } else {
        neededItems.className = 'got';
    }
}

function addItem() {
  var newItem = document.createElement("li");
  var input = document.getElementById("Input");
  newItem.innerHTML = input.value;
  input.value = "";
  document.getElementById("items").appendChild(newItem);
}
