/**
 * RoleController
 *
 * @description :: Server-side logic for managing Roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var message = null;

module.exports = {
	
		roles: function(req, res) {
	    	
	    	Roles.find().exec(function(err, roles) {
	    			req.flash('message', message);
			        res.view('pages/roles/roles',{data:roles});
			});
	    	
	    },
		edit: function(req, res) {
			
			Roles.findOne(req.param('id')).exec(function(err, role) {
				req.flash('message', '');
				res.view('pages/roles/edit',{role:role});
			});
			
		},
		add: function(req, res) {
			Roles.create({name:req.param('name')}).exec(function(err, role) {
				if(err){
					req.flash('message', err);
				}
				else{
					message = 'Record created successfully';
					res.redirect('roles');
				}
			});
			
		},
	    update: function(req, res) {
	    	Roles.update({id:req.param('id')},{name:req.param('name')}).exec(function(err, role) {
	    		if(err){
	    			req.flash('message', err);
	    			res.view('pages/roles/edit/'+req.param('id'));
	    		}
	    		else{
	    			message = 'Record updated successfully';
	    			res.redirect('roles');
	    		}
	    	});
	    	
	    },

		deleteObj: function(req, res) {
			Roles.destroy({id:req.param('id')}).exec(function(err, role) {
				if(err){
					req.flash('message', err);
					res.redirect('roles');
				}
				else{
					message = 'Record deleted successfully';
					res.redirect('roles');
				}
			});
		}
};