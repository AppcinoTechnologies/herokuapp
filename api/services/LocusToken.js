var https = require('https');
var access_token = null;
module.exports = {
  getToken: function(req, res, callback) {
	  	var postData = 'grant_type=password&client_id=959f71a7d346cec2a27bf56e19f3abad&client_secret=d21d1f9a3b3ee747f1d395aa28bd1116&username=locus%40posigen.com&password=t%5C%3Fnt6)gE9%5D2%2C%2CPA';
		var options = {
			  hostname: 'api.locusenergy.com',
			  path: '/oauth/token',
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/x-www-form-urlencoded',
			    'Content-Length': postData.length
			  }
			};

			var request = https.request(options, function(response) {
			   response.setEncoding('utf8');
			   response.on('data', function (authresponse) {
			    console.log('BODY locus service: ' + authresponse);
			    var obj = JSON.parse(authresponse);
				    console.log(obj.access_token);
				    if(obj.statusCode != 'undefined' && obj.statusCode != 401){
				    	var request1 = https.request(options, function(response1) {
				    		response1.setEncoding('utf8');
				    		response1.on('data', function (authresponse1) {
				    			console.log('BODY again: ' + authresponse1);
				    			var obj1 = JSON.parse(authresponse1);
				    			
				    			if(obj.access_token != 'undefined'){
				    				req.session.access_token = obj1.access_token;
				    				access_token = obj.access_token;
				    			}
				    		});
				    	});
				    }
				    else if(obj.access_token != 'undefined'){
				    	req.session.access_token = obj.access_token;
				    	access_token = obj.access_token;
				    	
				    }
				  
			  });
			   response.on('end', function() {
			    console.log('No more data in response.');
			    callback(access_token);
			  });
			});

			request.on('error', function(e) {
			  console.log('problem with request: ' + e.message);
			});

			// write data to request body
			request.write(postData);
			request.end();
  }
};