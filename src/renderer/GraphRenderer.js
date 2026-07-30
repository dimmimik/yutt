class GraphRenderer {

    static render(transfers) {

        console.log("=== Transfer Graph ===");

        transfers.forEach(t => {

            const size = Math.max(
                1,
                Math.round(t.amount / 50)
            );

            const bar = "=".repeat(size);

            console.log(
                `${t.from.padEnd(10)} -> ${t.to.padEnd(10)} ${bar} ${t.amount} USDC`
            );

        });

    }

    static renderNetworkSummary(transfers) {

        const summary = {};

        transfers.forEach(t => {

            summary[t.from] = (summary[t.from] || 0) + t.amount;

        });

        console.log("\nOutgoing Volume");

        Object.entries(summary).forEach(([network, amount]) => {

            console.log(
                network.padEnd(12),
                "#".repeat(Math.round(amount / 100)),
                amount
            );

        });

    }

}

module.exports = GraphRenderer;
