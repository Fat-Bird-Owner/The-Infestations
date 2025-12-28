const switchSorter = extend(Sorter, 'switch-sorter',{
health: 250,
requirements(Category.crafting, with(Items.copper, 10, Items.lead, 5))
})

switchSorter.buildType = () => extend(Sorter.SorterBuild, switchSorter,{

configured(player,value){
var config = this.sortItem

if (config = Items.copper){
this.inverted = true
}
  
}
  
})
