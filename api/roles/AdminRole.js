/**
 * Role
 *
 */

module.exports = {
  controllers: {
  	UserController: {
  		destroy: true
  	},

  	ConfigurationController: {
  		'*': true
  	}
  }
};
