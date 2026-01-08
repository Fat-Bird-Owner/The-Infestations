Events.on(UnitSpawnEvent, event => {

    if(event.unit.type.name == "Convoy"){
      Vars.ui.hudfrag.showUnlock(event.unit.type);
        }
    }
}
