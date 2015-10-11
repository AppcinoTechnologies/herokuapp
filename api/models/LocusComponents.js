/**
* LocusComponents.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  attributes: {
	   id: {
		    type: 'integer',
	   },
	   siteId: {
			type: 'bigint',
		},
		clientId: {
            type: 'bigint',
        },
        parentId: {
        	type: 'bigint',
        },
        parentType: {
        	type: 'text',
        },
        nodeId: {
        	type: 'text',
        },
        name: {
            type: 'string',
        },
        nodeType: {
        	type: 'integer',
        },
        application: {
        	type: 'string',
        },
        generationType: {
        	type: 'string',
        },
        oem: {
        	type: 'string',
        },
        model: {
        	type: 'string',
        },
        oem: {
        	type: 'string',
        },
        isConceptualNode: {
        	type: 'boolean',
        },
        partnerId: {
        	type: 'integer',
        }
  }

};