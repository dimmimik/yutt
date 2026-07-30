const assert = require("assert");

const TransferService = require("../src/services/TransferService");

const transfers = [

    {
        from: "Ethereum",
        to: "Base",
        amount: 300,
        fee: 0.3
    },
    {
        from: "Base",
        to: "Polygon",
        amount: 200,
        fee: 0.2
    }

];

const service = new TransferService(transfers);

assert.strictEqual(
    service.getTransfers().length,
    2
);

assert.strictEqual(
    service.getTotalVolume(),
    500
);

console.log("TransferService tests passed.");
