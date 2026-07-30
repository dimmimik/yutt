const fs = require("fs");
const path = require("path");
const Transfer = require("../models/Transfer");

class TransferRepository {

    load() {

        const file = path.join(
            __dirname,
            "../../data/sampleTransfers.json"
        );

        const raw = JSON.parse(
            fs.readFileSync(file)
        );

        return raw.map(item => new Transfer(
            item.id,
            item.from,
            item.to,
            item.amount,
            item.fee
        ));

    }

}

module.exports = TransferRepository;
