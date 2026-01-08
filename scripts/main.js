Events.on(UnitSpawnEvent, event => {

    if(event.unit.type == "infestation-convoy"){
      Vars.ui.menus.announce("[orange]It's Here.");
        }
    }
}
