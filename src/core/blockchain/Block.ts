import SHA512 from 'crypto-js/sha512';

export class Block {
  timestamp: any;
  lastHash: any;
  hash: any;
  data: any;
  validator: any;
  signature: any;

  constructor(timestamp, lastHash, hash, data, validator, signature) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.validator = validator;
    this.signature = signature;
  }

  static hash(timestamp, lastHash, data) {
    return SHA512(`${timestamp}${lastHash}${data}`).toString();
  }
}
