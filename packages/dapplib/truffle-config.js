require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'idea glimpse flame traffic black deliver remind concert gesture beauty fringe spread'; 
let testAccounts = [
"0x5f4faea44a06b7c19980ef64ac8ee36ce271f2ee8d3c20924ef3b5055b304a71",
"0xa1652e949848949870007f31151cc18c296433eef10ffc87137cf802e1291489",
"0xbce73abcf30458679ba24854c56645e217d58085cfb5c9207dea606c2f9f78ee",
"0x1cc6a4b6eaae76e59ef7962fb1d4982fffe0913f91818c8e0d578b1490350f46",
"0xc4f47c0c0bb111612946cf3a82c7ca48dcb288d05c4953312f0763fc6a351e8c",
"0xbcdccb83bd357c5632b59e6fde247d6f09b4a8ef674281cfe02f64031bee07f3",
"0x7f14734d1cbb354aa9ae98f54d0aa8784a4c6b146e7207b4c4a50c5f710d1ecc",
"0xb0708bc09121c679dd0acc214b7d74d8c712bc0ac6c07ccfdf2a558c9f7ce2c8",
"0xf2be8bebb571430140b0abde4362dbd8995d8c17e98f94ceca72086bc9e429b2",
"0xc8ad28d0b406f080e39a55b50f2ae5cfa4cbbe8aea7f94659f1c0e407455b3d2"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

