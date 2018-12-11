"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handleAuthorization = function (req, res, next) {
    var token = extractToken(req);
    if (!token) {
        res.setHeader('WWW-Authenticate', 'Bearer token_types="JWT"');
        res.status(401).json('voce precisa se autenticar');
    }
    else {
        jwt.verify(token, api_config_1.apiPassword, function (error, decoded) {
            if (decoded) {
                next();
            }
            else {
                res.status(403).json({ message: 'não autorizado' });
            }
        });
    }
};
function extractToken(req) {
    var token = undefined;
    if (req.headers && req.headers.authorization) {
        var params = req.headers.authorization.split(' ');
        if (params.length === 2 && params[0] === 'Bearer')
            token = params[1];
    }
    return token;
}
