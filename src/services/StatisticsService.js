class StatisticsService {

    constructor(transfers) {
        this.transfers = transfers;
    }

    build() {

        const totalAmount = this.transfers.reduce(
            (sum, t) => sum + t.amount,
            0
        );

        const totalFees = this.transfers.reduce(
            (sum, t) => sum + t.fee,
            0
        );

        const networks = new Set();

        this.transfers.forEach(t => {

            networks.add(t.from);
            networks.add(t.to);

        });

        return {

            transferCount: this.transfers.length,
            totalAmount,
            totalFees,
            averageFee:
                this.transfers.length
                    ? totalFees / this.transfers.length
                    : 0,
            networks: [...networks]

        };

    }

}

module.exports = StatisticsService;
