function undoStrike(neededItems){
    if(neededItems.className == 'got'){
      neededItems.className = 'need';
    } else {
        neededItems.className = 'got';
    }
}
