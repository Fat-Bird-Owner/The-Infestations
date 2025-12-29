Events.on(PlayerChatEvent, e => {
    if (!e.message || !e.message.startsWith("/")) return;
    
    var parts = e.message.split(" ");
    var cmd = parts[0];

if (cmd = "/su"){
var px = Vars.player.x;
var py = Vars.player.y;

var unitType = parts[1]
var unit = Vars.content.unit(unitType);

if (!unit){
Vars.ui.hudfrag.showToast("[red]Not a unit.");
return;
};

unit.spawn(Vars.player.team, px, py);
  
};

}
