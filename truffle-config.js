const HDWalletProvider = require('truffle-hdwallet-provider');
//
const fs = require('fs');
const mnemonic = fs.readFileSync("secret/.secret").toString().trim();

module.exports = {
    networks: {
        ganache: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*",
        },
        rinkeby: {
            provider: () => new HDWalletProvider(mnemonic, "YOUR_PROVIDER"),
            network_id: 4,       // Rinkeby's id
        },
    },
    compilers: {
        solc: {
            version: "0.4.24",
        }
    }
}
