require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name release sad under imitate private food section'; 
let testAccounts = [
"0x407b9680c7e00c566428f9223d4726d9c64381b8d30a759d8d09d9e86d55a1a2",
"0x4aca105145afb65e944e063ba1b2310f57016cbb7c17f950669406f948b556ff",
"0x6e604a1297f10629b90ddab6d38347dfbb85c58de080eb3600328f31f54c92db",
"0x4bfdeceaa231bf346f3a0b07c1c219ea50bd3cd15be8946a6ff380b56cb7bbfc",
"0xb7ff2ac3fd661b91ec7f4db9a97df3c2b47062d2244faa754ded87ca1ea1f891",
"0x6b34dca60d3c27f85452b80f2ffe206b3845d007f02209c72a47e1419c903208",
"0xc4fd4416abbd624da8ffc278dc62fbe58dd13cef1ec6f86062b2bcb5af4cc008",
"0x5378aac44ec73c4a3cd03f5e937f71af7a6693cc5b5caa8ed5d6f59f1331d835",
"0xeaf3dca1e3818a6b5d07f9e31977d84bd3bcf89dd6adde6f6b736e0558b1192d",
"0xc9489869ba3ddbcf9ab889f247e6b6dc3a11d1ed663e35f626dd161fddc75876"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
