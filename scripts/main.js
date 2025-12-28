
function makeTeam(id, name, color) {
  let team = Team.all[id];
  team.name = name;
  team.color.set(color);
  team.id = id;
  team.setPalette(color);
};

const someTeam = makeTeam(5, "Grenarc", "5D964EFF");
