const assert = require("assert");

const StatisticsService = require("../src/services/StatisticsService");

const stats = new StatisticsService([
    {
        from: "Ethereum",
        to: "Base",
        amount: 400,
        fee: 0.4
    },
    {
        from: "Base",
        to: "Arbitrum",
        amount: 100,
        fee: 0.1
    }
]).build();

assert.strictEqual(
    stats.transferCount,
    2
);

assert.strictEqual(
    stats.totalAmount,
    500
);

assert.strictEqual(
    stats.networks.length,
    3
);

console.log("StatisticsService tests passed.");
