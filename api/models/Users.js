/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  attributes: {
		id: {
			type: 'integer',
		},
        username: {
            type: 'string',
            required: true
        },
        email: {
        	type: 'string',
        	required: true
        },
        emailhash: {
        	type: 'string',
        },
        password: {
            type: 'string',
            required: true
        },
        // override default toJSON
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
  }

};