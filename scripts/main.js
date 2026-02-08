
Events.on(WorldLoadEvent, event => {
    Team.get(4).setPalette(Color.valueOf("63cf8e"));
    Team.get(4).emoji = "[#63cf8e][]";
  
    Team.get(5).setPalette(Color.valueOf("c93063"));
    Team.get(5).emoji = "[#c93063][]";
})
