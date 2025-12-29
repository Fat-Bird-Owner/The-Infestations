const panel = extend(Battery, 'battery-panel',{});

panel.buildType = () => extend(Battery.BatteryBuild, panel, {

update(){
this.power += 1;
}

})
