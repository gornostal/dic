define(function(){

	/**
	 * DI container constructor
	 * @param {Object} factories   keys represent object name, values are factory methods
	 */
	function Dic(factories) {
		this.factories = factories;
		this.registry = {};
	}

	/**
	 * Create instance by type name
	 * @param  {string} name
	 * @param  {Object} options [optional]
	 * @return {mixed}
	 */
	Dic.prototype.getInstance = function(name, options){
		if (!this.factories[name]) {
			throw new Error('Unknown type "' + name + '"');
		}

		return this.factories[name].call(this, options);
	};

	/**
	 * Create singleton instance
	 * @param  {string} name
	 * @param  {Object} options [optional]
	 * @return {mixed}
	 */
	Dic.prototype.getSingleton = function(name, options){
		if (!this.registry[name]) {
			this.registry[name] = this.getInstance(name, options);
		}

		return this.registry[name];
	};

	return Dic;
});