'use strict';

var berycore = module.exports;

// module information
berycore.version = 'v' + require('./package.json').version;
berycore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of berycore-lib found. ' +
      'Please make sure to require berycore-lib and check that submodules do' +
      ' not also include their own berycore-lib dependency.';
    throw new Error(message);
  }
};
berycore.versionGuard(global._berycore);
global._berycore = berycore.version;

// crypto
berycore.crypto = {};
berycore.crypto.BN = require('./lib/crypto/bn');
berycore.crypto.ECDSA = require('./lib/crypto/ecdsa');
berycore.crypto.Hash = require('./lib/crypto/hash');
berycore.crypto.Random = require('./lib/crypto/random');
berycore.crypto.Point = require('./lib/crypto/point');
berycore.crypto.Signature = require('./lib/crypto/signature');

// encoding
berycore.encoding = {};
berycore.encoding.Base58 = require('./lib/encoding/base58');
berycore.encoding.Base58Check = require('./lib/encoding/base58check');
berycore.encoding.BufferReader = require('./lib/encoding/bufferreader');
berycore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
berycore.encoding.Varint = require('./lib/encoding/varint');

// utilities
berycore.util = {};
berycore.util.buffer = require('./lib/util/buffer');
berycore.util.js = require('./lib/util/js');
berycore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
berycore.errors = require('./lib/errors');

// main bitcoin library
berycore.Address = require('./lib/address');
berycore.Block = require('./lib/block');
berycore.MerkleBlock = require('./lib/block/merkleblock');
berycore.BlockHeader = require('./lib/block/blockheader');
berycore.HDPrivateKey = require('./lib/hdprivatekey.js');
berycore.HDPublicKey = require('./lib/hdpublickey.js');
berycore.Networks = require('./lib/networks');
berycore.Opcode = require('./lib/opcode');
berycore.PrivateKey = require('./lib/privatekey');
berycore.PublicKey = require('./lib/publickey');
berycore.Script = require('./lib/script');
berycore.Transaction = require('./lib/transaction');
berycore.URI = require('./lib/uri');
berycore.Unit = require('./lib/unit');

// dependencies, subject to change
berycore.deps = {};
berycore.deps.bnjs = require('bn.js');
berycore.deps.bs58 = require('bs58');
berycore.deps.Buffer = Buffer;
berycore.deps.elliptic = require('elliptic');
berycore.deps.scryptsy = require('scryptsy');
berycore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
berycore.Transaction.sighash = require('./lib/transaction/sighash');
