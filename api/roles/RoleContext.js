/**
 * Role Context
 * ---
 * 
 * The role context is used to determine the roles of a given request.
 * You are free in how to do this, via session variable or via a DB lookup are common scenarios
 * 
 */

module.exports = {

    resolveRoles: function (request, next) {
    	if (!request.user) return next([]);
        next(request.user.roles);
    }

};
