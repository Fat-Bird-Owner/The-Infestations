Events.on(UnitSpawnEvent, event => {

    if(event.unit.type.name == "infestation-convoy"){
      Vars.ui.menus.announce("[orange]It's Here.");
        }
    }
}
