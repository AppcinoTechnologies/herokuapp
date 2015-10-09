/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
    
    login: function(req, res) {
    	if (req.user) {
    		return res.redirect('/dashboard');
    	} else {
    		res.view();
    	}
    },
    process: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
            if( (err) ) {
                return res.send({
                    message: err
                });
                res.send(err);
            }
            if( (!user) ) {
            	return res.send({
            		message: 'Username or password is incorrect'
            	});
            	res.send(err);
            }
            req.logIn(user, function(err) {
                if(err) res.send(err);
                return res.redirect('/dashboard');
            });
        }) (req, res);
    	
    /*	var myQuery = "select username, password from users";

        sails.log.debug("Query :", myQuery);

        User.query(myQuery, function (err, users){
        	sails.log.debug("users :", users);
          if(err || !users.rows.length){
            return res.json({"status": 0, "error": err});
          }
          else{
            return res.json(users);
            
          }
        }); */
    },

    logout: function(req, res) {
        req.logOut();
        return res.redirect('/login');
    }
};

module.exports.blueprints = {
    actions: true,
    rest: true,
    shortcuts: true
};

