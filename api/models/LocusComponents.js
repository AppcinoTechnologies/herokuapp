/**
* LocusComponents.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  tableName: "LocusComponents",
  attributes: {
	   siteId: {
			type: 'integer',
		},
		clientId: {
            type: 'integer',
        },
        parentId: {
        	type: 'integer',
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
        	type: 'string',
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
        },
        componentId: {
        	type: 'integer',
        }
  }

};