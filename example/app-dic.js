define(function(require) {
	var Dic = require('../dic');
	var AQ = require('AQ');

	return new Dic({
		'controllers/player': function(options){
			var ControllerPlayer = require('appname/controllers/player'),
				player = this.getSingleton('models/player');
			return new ControllerPlayer(AQ, player, options.element);
		},

		'models/player': function(){
			var Player = require('appname/models/player');
			return new Player(AQ);
		}
	});
});
