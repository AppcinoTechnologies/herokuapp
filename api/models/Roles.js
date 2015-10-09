/**
* Roles.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  attributes: {
		id: {
			type: 'integer',
		},
        name: {
            type: 'string',
            required: true
        },
        // override default toJSON
        toJSON: function() {
            var obj = this.toObject();
            return obj;
        }
  }

};