class TransferService {

    constructor(transfers) {
        this.transfers = transfers;
    }

    getTransfers() {
        return this.transfers;
    }

    getByNetwork(network) {

        return this.transfers.filter(t =>
            t.from === network || t.to === network
        );

    }

    getTotalVolume() {

        return this.transfers.reduce(
            (sum, t) => sum + t.amount,
            0
        );

    }

    getAverageFee() {

        if (this.transfers.length === 0) {
            return 0;
        }

        const total = this.transfers.reduce(
            (sum, t) => sum + t.fee,
            0
        );

        return total / this.transfers.length;

    }

}

module.exports = TransferService;
