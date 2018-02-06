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
    
  var sheet = document.createElement('style')
  sheet.innerHTML = "li {color: #fff; cursor: pointer; font-family: Chalkduster, 'Bradley Hand', cursive; font-size: 25px; padding-top: 20px;}";
  document.body.appendChild(sheet);
}
