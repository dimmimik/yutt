const TransferRepository = require("./src/repository/TransferRepository");
const TransferService = require("./src/services/TransferService");
const StatisticsService = require("./src/services/StatisticsService");
const ConsoleRenderer = require("./src/renderer/ConsoleRenderer");

function main() {

    const repository = new TransferRepository();
    const transfers = repository.load();

    const service = new TransferService(transfers);
    const statistics = new StatisticsService(service.getTransfers());

    ConsoleRenderer.printTransfers(service.getTransfers());

    console.log("");

    ConsoleRenderer.printStatistics(
        statistics.build()
    );

}

main();
