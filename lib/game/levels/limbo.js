ig.module( 'game.levels.limbo' )
.requires( 'impact.image','game.entities.player','game.entities.sign','game.entities.trigger','game.entities.hurt','game.entities.void','game.entities.respawn' )
.defines(function(){
LevelLimboResources=[new ig.Image('media/LimboTileSheet.png'), new ig.Image('media/ExtraTilesLimbo.png')];
});