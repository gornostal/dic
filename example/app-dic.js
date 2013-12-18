define(['require'], function(require) {
	var Dic = require('../dic');
	var AQ = require('AQ');

	return new Dic({
		'controllers/player': function(config){
			var ControllerPlayer = require('controllers/player'),
				player = this.getSingleton('models/player');
			return new ControllerPlayer(AQ, player, config.element);
		},

		'models/player': function(){
			var Player = require('models/player');
			return new Player(AQ);
		}
	});
});
