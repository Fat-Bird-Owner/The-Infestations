var copWall = Blocks.copperWall;

copWall.update = true;
copWall.buildType = () => extend(Wall.WallBuild, copWall,{
// update
update(){
this.health -= 1;

if (this.health <= 0){
this.kill();
}

}

})
