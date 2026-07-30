class ConsoleRenderer {

    static printTransfers(transfers) {

        console.log("=== USDC Transfers ===");

        transfers.forEach(t => {

            console.log(
                `${t.from} -> ${t.to} | ${t.amount} USDC | Fee ${t.fee}`
            );

        });

    }

    static printStatistics(stats) {

        console.log("=== Statistics ===");

        console.log("Transfers:", stats.transferCount);
        console.log("Networks:", stats.networks.join(", "));
        console.log("Volume:", stats.totalAmount, "USDC");
        console.log("Fees:", stats.totalFees.toFixed(2));
        console.log("Average fee:", stats.averageFee.toFixed(2));

    }

}

module.exports = ConsoleRenderer;
