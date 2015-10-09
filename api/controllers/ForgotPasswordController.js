/**
 * ForgotPasswordController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var nodemailer = require('nodemailer');
var randomstring = require("randomstring");
//var emailhostname = 'http://localhost:1337/';
var emailhostname = 'http://posigen.herokuapp.com/';

module.exports = {
	
	verifyEmail: function(req, res) {
        res.view('pages/verifyEmail');
    },

    verifyReset: function(req, res) {
    	if(req.param('val') != '' || req.param('val') != null){
			Users.findOne({ emailhash: req.param('val') }).exec(function(err, user) {
				if(err) { return done(err); }
				if(!user) { return res.send({message: 'Some error occured or link has been expired'}); }
				
				var emailhash = randomstring.generate(50);
				Users.update({emailhash: req.param('val')},{emailhash: emailhash}).exec(function afterwards(err, updated){

		    		  if (err) {
		    			  return console.log(error);
		    		  }
		    		  res.view('pages/verifyReset',{hash: emailhash});
				});
				
			});
		}
    	
    },

    processVerifyReset: function(req, res) {
    	if(req.param('password') != '' && req.param('passwordAgain') != null){
    		if(req.param('password') == req.param('passwordAgain')){
    			
    			console.log(req.param('hash'));
	    		Users.findOne({ emailhash: req.param('hash') }).exec(function(err, user) {
	    			if(err) { return done(err); }
	    			if(!user) { return res.send({message: 'Some error occured'}); }
	    			Users.update({emailhash: req.param('hash')},{password: req.param('password')}).exec(function afterwards(err, updated){
	    				
	    				if (err) {
	    					return console.log(error);
	    				}
	    			});
	    			return res.view('pages/passwordChanged');
	    		});
	    	}
    		else{
    			return res.send({message: 'Password not matched'});
    		}
    	}
    	
    },

	process: function(req, res){
		sails.log.debug("Email :", req.param('email'));
		
		Users.findOne({ email: req.param('email') }).exec(function(err, user) {
            if(err) { return done(err); }
            if(!user) { return res.send({message: 'Email not found'}); }
            if(user){
            	
            	var emailhash = randomstring.generate(50);
            	Users.update({email: req.param('email')},{emailhash: emailhash}).exec(function afterwards(err, updated){

        		  if (err) {
        			  return console.log(error);
        		  }

	            	var transporter = nodemailer.createTransport({
	        		    service: 'Gmail',
	        		    auth: {
	        		        user: 'irfank@appcino.com',
	        		        pass: 'Ikb@gmailappcino'
	        		    }
	        		});
	        		
	        		var mailOptions = {
	        		    from: 'irfank@appcino.com',
	        		    to: req.param('email'),
	        		    subject: 'Posigen Reset password',
	        		    text: 'Please click the link to reset your password: '+emailhostname+'verifyReset?val='+emailhash,
	        		    html: '<b>Please click the link to reset your password: </b></br>'+emailhostname+'verifyReset?val='+emailhash
	        		};
	        		
	        		transporter.sendMail(mailOptions, function(error, info){
	        		    if(error){
	        		        return console.log(error);
	        		    }
	        		    res.view('pages/verifyEmailSend');
	        		    console.log('Message sent: ' + info.response);
	
	        		});
            	});	
            }
        });
		
		
	}
};

