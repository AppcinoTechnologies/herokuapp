/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    
    dashboard: function(req, res) {
        res.view('pages/dashboard');
    }
};

module.exports.blueprints = {
    actions: true,
    rest: true,
    shortcuts: true
};

