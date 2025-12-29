var copWall = Blocks.copperWall;

copperWall.buildType = () => extend(Wall.WallBuild, copWall,{
// update
update(){
var hp = this.health;
  
if (hp === null) return;
var postHp = hp - 1;
this.health = postHp;

if (postHp <= 0){
this.kill();
}

}

})
