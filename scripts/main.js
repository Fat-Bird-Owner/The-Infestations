var copWall = Blocks.copperWall;

copWall.buildType = () => extend(Wall.WallBuild, copWall,{
// update
placed(){
Vars.ui.hudfrag.showToast("Pathetic.");
}

})
