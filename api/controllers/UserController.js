/**
 * ProfileController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	profile: function(req, res) {
		Profile.findOne({ userid: req.user.id }).exec(function(err, profile) {
			if(err) { return done(err); }
			if(!user) { return res.send({message: 'User not found'}); }
	        console.log(profile.userid);
	        console.log(profile.id);
			res.view('pages/profile',{firstname: profile.firstname, lastname: profile.lastname});
		});

    },
    
	profileSave: function(req, res) {

			Profile.update({userid: req.user.id},{firstname: req.param('firstname'), lastname: req.param('lastname'), gender: req.param('gender')}).exec(function afterwards(err, updated){

	    		  if (err) {
	    			  return console.log(error);
	    		  }
	    		  res.view('pages/verifyReset',{hash: emailhash});
			});
		
		res.view('pages/profile');
	},

    users: function(req, res) {
    	
    	Users.find().exec(function(err, users) {
		        res.view('pages/users',{data:users});
		});
    	
    }
};

