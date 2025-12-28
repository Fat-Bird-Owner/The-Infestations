
Object.keys(Blocks).forEach(function(block){
if (Blocks[block] != null){
Blocks[block].researchCostMultiplier = 0
Blocks[block].unlock()
}
});

