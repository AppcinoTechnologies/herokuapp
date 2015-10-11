/**
* LocusSites.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  tableName: "locusSites",
  attributes: {
	  id: {
		  type: 'integer',
	  },
	   siteId: {
			type: 'integer',
		},
		clientId: {
            type: 'integer',
        },
        name: {
        	type: 'string',
        },
        address1: {
        	type: 'string',
        },
        locale3: {
        	type: 'text',
        },
        locale1: {
        	type: 'text',
        },
        localeCode1: {
        	type: 'string',
        },
        postalCode: {
        	type: 'integer',
        },
        countryCode: {
        	type: 'string',
        },
        partnerId: {
        	type: 'integer',
        },
        size: {
        	type: 'float',
        },
        mismatch: {
        	type: 'integer',
        },
        diodesAndConnections: {
        	type: 'integer',
        },
        dcWiring: {
        	type: 'integer',
        },
        soiling: {
        	type: 'integer',
        },
        sunTracking: {
        	type: 'integer',
        },
        nameplate: {
        	type: 'integer',
        },
        acWiring: {
        	type: 'integer',
        },
        transformer: {
        	type: 'integer',
        },
        tmy3Id: {
        	type: 'integer',
        },
        installer: {
        	type: 'text',
        },
        installDate: {
        	type: 'date',
        },
        ptoDate: {
        	type: 'date',
        },
        startupDate: {
        	type: 'date',
        },
        uninstallDate: {
        	type: 'date',
        },
        locale2: {
        	type: 'text',
        },
        latitude: {
        	type: 'float',
        },
        longitude: {
        	type: 'float',
        }
  }

};