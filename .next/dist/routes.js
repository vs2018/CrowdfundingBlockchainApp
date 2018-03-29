'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFJQSxPQUNDLEFBREQsSUFDSyxBQURMLGtCQUN1QixBQUR2QixrQkFFQyxBQUZELElBRUssQUFGTCx1QkFFNEIsQUFGNUIsbUJBR0MsQUFIRCxJQUdLLEFBSEwsZ0NBR3FDLEFBSHJDOztBQU9BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Zpc2hhbHNoYXJtYS9zb2Z0d2FyZV9hcHBzL2V0aGVyZXVtL2tpY2tzdGFydCJ9