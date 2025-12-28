Events.on(WithdrawEvent, event => { 
var building = event.tile;
var item = event.item;
var amount = event.amount;
  
Vars.ui.hudfrag.showToast("taken");

});

