'use strict';

var should = require('chai').should();
var berycore = require('../');

describe('#versionGuard', function() {
  it('global._berycore should be defined', function() {
    should.equal(global._berycore, berycore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      berycore.versionGuard('version');
    }).should.throw('More than one instance of berycore');
  });
});
