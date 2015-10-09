/**
 * RoleController
 *
 * @description :: Server-side logic for managing Roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
		roles: function(req, res) {
	    	
	    	Roles.find().exec(function(err, roles) {
	    			req.flash('message', '');
			        res.view('pages/roles/roles',{data:roles});
			});
	    	
	    },
		edit: function(req, res) {
			
			Roles.findOne(req.param('id')).exec(function(err, role) {
				req.flash('message', '');
				res.view('pages/roles/edit',{role:role});
			});
			
		},
	    update: function(req, res) {
	    	console.log(req.param('id'));
	    	Roles.update({id:req.param('id')},{name:req.param('name')}).exec(function(err, role) {
	    		if(err){
	    			req.flash('message', err);
	    			res.view('pages/roles/edit/'+req.param('id'));
	    		}
	    		else{
	    			req.flash('message', 'Updated successfull');
	    			res.redirect('roles');
	    		}
	    	});
	    	
	    },

		deleteObj: function(req, res) {
			console.log(req.param('id'));
			Roles.destroy({id:req.param('id')}).exec(function(err, role) {
				if(err){
					req.flash('message', err);
					res.redirect('roles');
				}
				else{
					req.flash('message', 'Deleted successfull');
					res.redirect('roles');
				}
			});
		}
};