// make door

const killDoor = extend(Door, "kill-door", {})

killDoor.buildType = () => extend(Door.DoorBuild,killDoor,{

tapped(){
this.health = 0
}
  
})
