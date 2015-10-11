/**
 * LocusDataLoaderController
 *
 * @description :: Server-side logic for managing Locusdataloaders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var https = require('https');
var access_token = null;
module.exports = {
	
		run: function(request, response) {
			
			var options = {
			  hostname: 'api.locusenergy.com',
			  path: '/v3/partners/414397/components',
			  method: 'GET',
			  headers: {
			    'Accept': 'application/json',
			    'Authorization': 'Bearer 4ede40e73843b647937b3d256a203b52'
			  }
			};
					
			var req = https.request(options, function(res) {
					  res.setEncoding('utf8');
					  var data = '';
					  res.on('data', function (resp) {
						  data += resp;
					  });
					  res.on('end', function() {
						 var respreplaced = data.replace(/'/g, "\\'");
						 var obj = JSON.parse(respreplaced);
						 if(obj.statusCode == 200){
							 obj.components.forEach(function(component){
								console.log(component);
								LocusComponents.create(
									{
										name : req.param('name'),
										
									}).exec(function(err, role) {
										if(err){
											req.flash('message', err);
										}
										else{
											message = 'Record created successfully';
											res.redirect('roles');
										}
								});
								 
							 });
						 }
						 
					    console.log('No more data in response data loader.');
					  });
					});

					req.on('error', function(e) {
					  console.log('problem with request: ' + e.message);
					});

					// write data to request body
					//req.write(postData);
					req.end();
					
		}
			

};

function loadData(token){
	
		
}

