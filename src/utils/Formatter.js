class Formatter {

    static usdc(amount) {

        return `${amount.toFixed(2)} USDC`;

    }

    static fee(value) {

        return `${value.toFixed(3)} USDC`;

    }

    static percent(value) {

        return `${value.toFixed(2)}%`;

    }

}

module.exports = Formatter;
