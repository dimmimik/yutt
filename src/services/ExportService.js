const fs = require("fs");

class ExportService {

    static save(file, statistics) {

        fs.writeFileSync(
            file,
            JSON.stringify(statistics, null, 4)
        );

    }

}

module.exports = ExportService;
