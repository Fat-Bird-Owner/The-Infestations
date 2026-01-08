Events.on(UnitSpawnEvent, event => {

    if(event.unit == "infestation-convoy"){
      Vars.ui.hudfrag.showUnlock(event.unit);
        }
    }
}
