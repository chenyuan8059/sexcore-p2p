'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on sexcore-p2p Module {0}'
};

module.exports = require('sexcore-lib').errors.extend(spec);
