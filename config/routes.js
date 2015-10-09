/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/


  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

	'/': {
		controller: 'AuthController',
	    action: 'login'
	},
	'get /login': {
	    controller: 'AuthController',
	    action: 'login'
	},
	'post /login': {
	    controller: 'AuthController',
	    action: 'process'
	},
	'get /logout': {
	    controller: 'AuthController',
	    action: 'logout'
	},
	'get /dashboard': {
		controller: 'DashboardController',
		action: 'dashboard'
	},
	'get /verifyEmail': {
		controller: 'ForgotPasswordController',
		action: 'verifyEmail'
	},
	'post /verifyEmail': {
		controller: 'ForgotPasswordController',
		action: 'process'
	},
	
	'get /verifyReset': {
		controller: 'ForgotPasswordController',
		action: 'verifyReset'
	},
	'post /verifyReset': {
		controller: 'ForgotPasswordController',
		action: 'processVerifyReset'
	},
	'get /profile': {
		controller: 'UserController',
		action: 'profile'
	},
	'post /profile': {
		controller: 'UserController',
		action: 'profileSave'
	},
	'get /users': {
		controller: 'UserController',
		action: 'users'
	},
	'get /locusauthentication': {
		controller: 'LocusAuthenticationController',
		action: 'locusAuth'
	},
	'post /locusauthentication': {
		controller: 'LocusAuthenticationController',
		action: 'processLocusAuth'
	},
	'get /roles': {
		controller: 'RoleController',
		action: 'roles'
	},
	'get /roles/edit/:id': {
		controller: 'RoleController',
		action: 'edit'
	},
	'post /updateRole': {
		controller: 'RoleController',
		action: 'update'
	},
	'get /roles/delete/:id': {
		controller: 'RoleController',
		action: 'deleteObj'
	},
	'post /addRole': {
		controller: 'RoleController',
		action: 'add'
	}

};
