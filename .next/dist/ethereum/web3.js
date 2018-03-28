'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefinedt' && typeof window.web3 !== 'undefined') {
  //we are in the browser and metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //We are on the server OR the user is not running metask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/hGWKtiJNtJLQY1D2rCEt');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZ0JBQWtDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTdELGFBQTBFLEFBQzFFO0FBQ0U7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNEO0FBSEQsT0FHTyxBQUNMO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDZixBQURlLEFBQWpCLEFBR0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0Q7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy92aXNoYWxzaGFybWEvc29mdHdhcmVfYXBwcy9ldGhlcmV1bS9raWNrc3RhcnQifQ==