const { Buffer } = require('buffer');
const { KEYUTIL } = require('jsrsasign');
const elliptic = require('elliptic');

const signHex = (digest, privateKeyPEM) => {
    const { prvKeyHex } = KEYUTIL.getKey(privateKeyPEM);

    const EC = elliptic.ec;
    const ecdsaCurve = elliptic.curves['p256'];

    const ecdsa = new EC(ecdsaCurve);
    const signKey = ecdsa.keyFromPrivate(prvKeyHex, 'hex');
    const sig = ecdsa.sign(Buffer.from(digest, 'hex'), signKey, 'hex', { canonical: true });

    let signature = Buffer.from(sig.toDER()).toString('hex');
    return signature;
}

module.exports = {
    signHex,
}