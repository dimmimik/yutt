class Validator {

    static validateTransfer(transfer) {

        if (!transfer.from || !transfer.to) {
            return false;
        }

        if (transfer.amount <= 0) {
            return false;
        }

        if (transfer.fee < 0) {
            return false;
        }

        return true;

    }

    static validateAll(transfers) {

        return transfers.every(
            t => this.validateTransfer(t)
        );

    }

}

module.exports = Validator;
