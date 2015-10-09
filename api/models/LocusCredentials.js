/**
* locuscredentials.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  attributes: {
	   id: {
		    type: 'integer',
	   },
	   clientid: {
			type: 'string',
		},
		clientsecret: {
            type: 'string',
        },
        partnerid: {
        	type: 'string',
        },
        accesstoken: {
        	type: 'string',
        },
        refreshtoken: {
            type: 'string',
        },
        expiresin: {
        	type: 'integer',
        },
        issuedat: {
        	type: 'string',
        },
        tokentype: {
        	type: 'string',
        },
        
  }

};