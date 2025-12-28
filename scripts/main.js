Events.on(WithdrawEvent, event => { 
var building = event.tile;
var item = event.item;
var amount = event.amount;

var text = "Taken " + amount + " " + item + "s from " + building
  
Vars.ui.hudfrag.showToast(text);

});

