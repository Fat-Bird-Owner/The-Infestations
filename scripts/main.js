Events.on(WithdrawEvent, event => { 
var building = event.tile;
var item = event.item;
var amount = event.amount;

var text = "Taken"
  
Vars.ui.hudfrag.showToast(text);

});

