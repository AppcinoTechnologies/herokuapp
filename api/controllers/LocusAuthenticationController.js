/**
 * LocusAuthenticationController
 *
 * @description :: Server-side logic for managing Locus Authentication
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var querystring = require('querystring');
var https = require('https');
var urlencode = require('urlencode');
var CronJob = require('cron').CronJob;

module.exports = {
	
	locusAuth: function(req, res) {
		res.view('pages/locusauth');
    },
    
	processLocusAuth: function(req, res) {
		
		LocusCredentials.findOne({ id: 1 }).exec(function(err, locus) {
				if(err) { console.log(err); }
				else{
					//var postData = 'grant_type=password&client_id='+locus.clientid+'&client_secret='+locus.clientsecret+'&username=locus@posigen.com&password='+urlencode('t\?nt6)gE9]2,,PA')+'';
					var postData = 'grant_type=password&client_id=959f71a7d346cec2a27bf56e19f3abad&client_secret=d21d1f9a3b3ee747f1d395aa28bd1116&username=locus%40posigen.com&password=t%5C%3Fnt6)gE9%5D2%2C%2CPA';
					locusAuthorization(postData,true);
				}
				res.view('pages/locusauthComplete',{status: '1', message: 'Authentication successfull'});
		});
	}
};

function scheduleRefreshToken(postData){
	
	var CronJob = require('cron').CronJob;
	var job = new CronJob({
	  cronTime: '00 55 * * * *',
	  onTick: function() {
		  locusAuthorization(postData,false);
	  },
	  start: false,
	  timeZone: 'America/Los_Angeles'
	});
	job.start();
}

function locusAuthorization(postData, check){
	
	var options = {
		  hostname: 'api.locusenergy.com',
		  path: '/oauth/token',
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/x-www-form-urlencoded',
		    'Content-Length': postData.length
		  }
		};

		var req = https.request(options, function(res) {
		  res.setEncoding('utf8');
		  res.on('data', function (authresponse) {
		    console.log('BODY: ' + authresponse);
		    var obj = JSON.parse(authresponse);
		    console.log(obj.access_token);
		    LocusCredentials.update({id: 1},{accesstoken: obj.access_token, refreshtoken: obj.refresh_token, expiresin: obj.expires_in, issuedat: obj.issued_at, tokentype: obj.token_type}).exec(function afterwards(err, updated){
				  if (err) {
	    			  return console.log(error);
	    		  }
				  console.log(updated);
			  });
			  
			  if(check){
				 // scheduleRefreshToken(postData);
			  }
		  });
		  res.on('end', function() {
		    console.log('No more data in response.');
		  });
		});

		req.on('error', function(e) {
		  console.log('problem with request: ' + e.message);
		});

		// write data to request body
		req.write(postData);
		req.end();
}



